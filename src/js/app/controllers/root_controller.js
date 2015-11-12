angular.module('resume').controller('RootController',
  function($scope, Header, Skill, $stateParams) {
    'use strict';

    var ctrl = this;
    var skillPromise = Skill.query().$promise;

    ctrl.validTags = Skill.names();
    ctrl.name = '';
    ctrl.contact = [];
    ctrl.address = {};
    ctrl.displayState = 'init';
    ctrl.annotatedSearchTags = [];

    var header = Header.get();
    header.$promise.then(function(value) {
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
