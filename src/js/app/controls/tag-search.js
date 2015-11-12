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
