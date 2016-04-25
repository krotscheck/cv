angular.module("resume", ["ui.router", "ngResource"])
  .config(function($urlRouterProvider, $httpProvider, $stateProvider) {
    "use strict";

    $stateProvider
      .state("root", {
        url: "?tags",
        templateUrl: "view/index.html",
        controller: "RootController as root"
      });
  });

angular.module('resume').controller('AboutController',
  function($scope, User) {
    'use strict';

    var ctrl = this;

    var userPromise = User.get().$promise;

    /**
     * Choose the most appropriate about text from the provided map.
     *
     * @param {Event} evt An event, not used.
     * @param {{}} searchParams The passed search parameters.
     * @returns {void}
     */
    ctrl.render = function(evt, searchParams) {
      var showEverything = searchParams.indexOf('Everything') > -1;

      userPromise.then(function(header) {
        // If the search params are empty, update nothing.
        if (searchParams.length === 0) {
          return;
        }

        var aboutRef = header.about.default || {priority: 100000, text: null};
        angular.forEach(header.about, function(about, key) {
          if (showEverything || searchParams.hasOwnProperty(key) &&
            about.priority < aboutRef.priority) {
            aboutRef = about;
          }
        });
        ctrl.text = aboutRef.text;
      });
    };

    $scope.$on('$destroy', $scope.$on('invalidate', ctrl.render));

  });

angular.module('resume').controller('EventController',
  function($scope, Event, $log) {
    'use strict';

    var ctrl = this;

    var timelinePromise = Event.query(['job_change', 'project']).$promise;
    ctrl.education = Event.query(['education']);
    ctrl.presentation = Event.query(['presentation']);

    /**
     * Helper method, lowercases the string.
     *
     * @param {string} item The string to lowercase.
     * @returns {string} The lowercased string.
     */
    function mapToLower (item) {
      return item.toLowerCase();
    }

    /**
     * Choose the most appropriate events from the provided list.
     *
     * @param {Event} evt An event, not used.
     * @param {{}} searchParams The passed search parameters.
     * @returns {void}
     */
    ctrl.render = function(evt, searchParams) {

      var showEverything = searchParams.indexOf('Everything') > -1;

      // Lowercase the search parameters.
      var lcFilters = searchParams.map(mapToLower);

      timelinePromise.then(function(events) {
        // If the search params are empty, update nothing.
        if (searchParams.length === 0) {
          return;
        }

        // Go through the events and only choose those that are relevant
        ctrl.events = events.filter(function(event) {
          if (showEverything) {
            return true;
          }

          if (!event.hasOwnProperty('tags') || event.tags.length === 0) {
            $log.warn('Event has no tags:', event.title);
            return false;
          }

          var lcTags = event.tags.map(mapToLower);
          var mergedTags = lcTags.filter(function(item) {
            return lcFilters.indexOf(item) > -1;
          });

          return mergedTags.length > 0;
        });
      });
    };

    $scope.$on('$destroy', $scope.$on('invalidate', ctrl.render));
  });

angular.module('resume').controller('RootController',
  function($scope, User, Skill, $stateParams) {
    'use strict';

    var ctrl = this;
    var skillPromise = Skill.query().$promise;

    ctrl.validTags = Skill.names();
    ctrl.name = '';
    ctrl.contact = [];
    ctrl.address = {};
    ctrl.displayState = 'init';
    ctrl.annotatedSearchTags = [];

    var user = User.get();
    user.$promise.then(function(value) {
      ctrl.name = value.name;
      ctrl.contact = value.contact;
      ctrl.address = value.address;
    });

    if (!!$stateParams.tags && !angular.isArray($stateParams.tags)) {
      ctrl.searchTags = [$stateParams.tags];
    } else {
      ctrl.searchTags = $stateParams.tags || [];
    }

    /**
     * Inject only the parent tags into the search list.
     *
     * @returns {void}
     */
    ctrl.everything = function() {
      ctrl.searchTags = ["Everything"];
      ctrl.invalidate();
    };

    ctrl.invalidate = function() {

      // Change the display state.
      ctrl.displayState = ctrl.searchTags.length > 0 ? 'display' : 'init';

      // Decorate our search tags with the meta grouping tags.
      skillPromise.then(function(skills) {
        var annotatedSearchTags = [];
        angular.forEach(ctrl.searchTags, function(item) {
          if (annotatedSearchTags.indexOf(item) === -1) {
            annotatedSearchTags.push(item);
          }
        });
        ctrl.annotatedSearchTags = annotatedSearchTags;

        // Broadcast the search tags to all the other controllers.
        $scope.$broadcast('invalidate', ctrl.annotatedSearchTags);
      });
    };

    ctrl.invalidate();
  });

angular.module('resume').directive('tagSearch',
  function ($rootScope, $timeout) {
    'use strict';

    var HOT_KEYS = [9, 13, 27, 38, 40];

    return {
      restrict: 'A',
      templateUrl: 'view/controls/tag-search.html',
      require: 'ngModel',
      scope: {
        validTags: '=tagSearch',
        placeholder: '=placeholder'
      },
      link: function ($scope, $element, attrs, ngModel) {
        /**
         * Grab our input.
         */
        var $input = $element.find('input');

        /**
         * The active selection index.
         */
        $scope.activeIdx = 0;

        /**
         * The tags as stored in the scope.
         */
        $scope.tags = [];

        /**
         * Override the element's focus method, use it to focus our
         * input instead.
         *
         * @returns {void}
         */
        $element[0].focus = function () {
          $input[0].focus();
        };

        /**
         * Are we focused?
         * @type {Boolean}
         */
        $scope.hasFocus = false;

        /**
         * What is the matched list of valid tags?
         * @type {Array}
         */
        $scope.matches = [];

        /**
         * The current search text in the input box.
         *
         * @type {String}
         */
        $scope.searchText = '';

        /**
         * Reset the matches on the scope.
         *
         * @returns {void}
         */
        var resetMatches = function () {
          $scope.matches = [];
          $scope.activeIdx = -1;
          $scope.searchText = '';
        };

        /**
         * Focus when the input gets focus.
         */
        $input.on('focus', function () {
          $scope.hasFocus = true;
          if (!$rootScope.$$phase) {
            $scope.$digest();
          }
        });

        /**
         * Blur when the input gets blurred.
         */
        $input.on('blur', function () {
          $timeout(function () {
            resetMatches();
            $scope.newTagName = '';
            $scope.hasFocus = false;
            if (!$rootScope.$$phase) {
              $scope.$digest();
            }
          }, 200);
        });

        /**
         * Bind to arrow controls, escape, and return.
         */
        $input.on('keydown', function (evt) {

          // Make sure we have something to react to.
          if ($scope.matches.length === 0 ||
            HOT_KEYS.indexOf(evt.which) === -1) {
            return;
          }

          evt.preventDefault();

          if (evt.which === 40) {
            $scope.activeIdx = ($scope.activeIdx + 1) %
              $scope.matches.length;
            $scope.$digest();
          } else if (evt.which === 38) {
            $scope.activeIdx = ($scope.activeIdx ? $scope.activeIdx
                : $scope.matches.length) - 1;
            $scope.$digest();
          } else if (evt.which === 13 || evt.which === 9) {
            $scope.$apply(function () {
              $scope.select($scope.activeIdx);
            });
          } else if (evt.which === 27) {
            evt.stopPropagation();

            resetMatches();
            $scope.$digest();
          }
        });

        /**
         * Event handler when delete is pressed inside the input field.
         * Pops the last item off the selected list.
         *
         * @returns {Boolean} True if the event was handled, otherwise false.
         */
        $scope.deletePressed = function () {
          var selectedTags = $scope.tags || [];

          if (selectedTags.length > 0 && !$scope.searchText) {
            $scope.removeTag(selectedTags[selectedTags.length - 1]);
            return true;
          }
          return false;
        };

        /**
         * When a user clicks on the background of this control, we want
         * to focus the text input field.
         *
         * @returns {void}
         */
        $scope.focus = function () {
          $input[0].focus();
        };

        /**
         * Called when something's selected.
         *
         * @param {Number} idx Index in the currently displayed filtered tags.
         * @returns {void}
         */
        $scope.select = function (idx) {
          $scope.tags.push($scope.matches[idx]);
          resetMatches();
          ngModel.$setViewValue(angular.copy($scope.tags));
        };

        /**
         * Removes a tag.
         *
         * @param {String} tag The tag to remove.
         * @returns {void}
         */
        $scope.removeTag = function (tag) {
          if (!$scope.tags) {
            return;
          }
          var idx = $scope.tags.indexOf(tag);
          if (idx > -1) {
            $scope.tags.splice(idx, 1);
            ngModel.$setViewValue(angular.copy($scope.tags));
          }
        };

        /**
         * The in-scope method which reduces our list of valid tags down to
         * filtered subset.
         *
         * @param {String} name The name to filter on.
         * @return {void}
         */
        $scope.filterTags = function (name) {
          var results = [];
          if (name) {
            angular.forEach($scope.validTags, function (tag) {
              if (tag.toLowerCase().indexOf(name.toLowerCase()) > -1) {
                if ($scope.tags.indexOf(tag) === -1) {
                  results.push(tag);
                }
              }
            });

          }
          $scope.activeIdx = 0;
          $scope.matches = results;
        };

        /**
         * Changes in ng-model propagate to the control.
         *
         * @returns {void}
         */
        ngModel.$render = function () {
          $scope.tags = angular.copy(ngModel.$viewValue);
        };
      }
    };
  });

angular.module('resume').directive('ngDelete', function () {
  'use strict';

  return function (scope, element, attrs) {

    element.bind('keydown keypress', function (event) {
      if (event.which === 8) {
        var preventDefault = false;

        scope.$apply(function () {
          preventDefault = scope.$eval(attrs.ngDelete);
        });

        if (preventDefault) {
          event.preventDefault();
        }
      }
    });
  };
});


angular.module('resume').directive('ngEnter', function () {
  'use strict';

  return function (scope, element, attrs) {

    element.bind('keydown keypress', function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });

        event.preventDefault();
      }
    });
  };
});

angular.module('resume')
  .filter('contactLink', function () {
    'use strict';

    return function (input, parameters) {
      switch (parameters.type) {
        case 'envelope':
          return 'mailto:' + input;
        default:
          return input;
      }
    };
  });

angular.module('resume').service('Event',
  function($http, $q) {
    'use strict';

    var deferred;

    function getEvents () {
      if (!deferred) {
        deferred = $q.defer();
        $http({
          method: 'GET',
          url: './data/events.json'
        }).then(function(response) {
          // Extract the data.
          var events = response.data;

          // Iterate through and replace any dates.
          for (var i = 0; i < events.length; i++) {
            var event = events[i];
            if (typeof event.date === 'string') {
              event.date = new Date(events[i].date);
            } else {
              if (event.date.hasOwnProperty('begin')) {
                event.date.begin = new Date(event.date.begin);
              }
              if (event.date.hasOwnProperty('end')) {
                if (event.date.end === 'current') {
                  event.date.end = new Date();
                } else {
                  event.date.end = new Date(event.date.end);
                }
              }
            }
          }
          deferred.resolve(events);
        }, function(response) {
          deferred.reject(response.data);
        });
      }

      return deferred.promise;
    }

    return {
      query: function(types) {
        var deferred = $q.defer();
        var events = [];
        events.$promise = deferred.promise;
        events.$resolved = false;
        events.$promise.then(function(results) {
          for (var i = 0; i < results.length; i++) {
            events.push(angular.copy(results[i]));
          }
          events.$resolved = true;
        }, function() {
          events.$resolved = true;
        });

        getEvents().then(function(results) {

          // Postprocessing filters.
          results = results.filter(function(element) {
            var typeMatches = true;
            if (types) {
              typeMatches = types.indexOf(element.type) > -1;
            }

            var tagsMatch = true;
            return typeMatches && tagsMatch;
          });

          // Sort results by date.
          results.sort(function(a, b) {
            var aDate = a.date.end || a.date;
            var bDate = b.date.end || b.date;
            if (aDate === bDate) {
              return 0;
            }
            return aDate > bDate ? -1 : 1;
          });

          deferred.resolve(results);
        }, function(error) {
          deferred.resolve(error);
        });

        return events;
      }
    };
  });

angular.module('resume').service('User',
  function ($http, $q) {
    'use strict';

    var deferred;

    function getUser () {
      if (!deferred) {
        deferred = $q.defer();
        $http({
          method: 'GET',
          url: './data/user.json'
        }).then(function (response) {
          // Extract the data.
          deferred.resolve(response.data);
        }, function (response) {
          deferred.reject(response.data);
        });
      }
      return deferred.promise;
    }

    return {
      get: function () {
        var user = {};
        user.$promise = getUser();
        user.$resolved = false;
        user.$promise.then(function (result) {
          angular.copy(result, user);
          user.$resolved = true;
        }, function () {
          user.$resolved = true;
        });

        return user;
      }
    };
  });

angular.module('resume').service('Skill',
  function($http, $q, Event) {
    'use strict';

    var skills = {
      everything: {name: 'Everything'},
      $resolved: false
    };

    skills.$promise = Event.query().$promise.then(function(events) {
      var handledSkills = {'everything': true};
      angular.forEach(events, function(event) {
        if (!event.tags || event.tags.length == 0) {
          return;
        }

        angular.forEach(event.tags, function(tag) {
          var lcTag = tag.toLowerCase();
          if (!handledSkills.hasOwnProperty(lcTag)) {
            handledSkills[lcTag] = true;
            skills[lcTag] = {name: tag};
          }
        });
      });
      skills.$resolved = true;
      return skills;
    });

    return {
      names: function() {
        var names = [];
        names.$resolved = false;
        names.$promise = skills.$promise.then(function(results) {
          var sortedNames = [];

          angular.forEach(results, function(value) {
            if (value.name) {
              sortedNames.push(value.name);
            }
          });

          sortedNames.sort();
          angular.forEach(sortedNames, function(name) {
            names.push(name);
          });
          names.$resolved = true;

          return names;
        }, function() {
          names.$resolved = true;
        });
        return names;
      },
      query: function() {
        return skills;
      }
    };
  }
);
