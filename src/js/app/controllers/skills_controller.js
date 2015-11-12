angular.module('resume').controller('SkillsController',
  function ($scope, Header) {
    'use strict';

    var ctrl = this;

    var headerPromise = Header.get().$promise;

    /**
     * Choose the most appropriate about text from the provided map.
     *
     * @param {Event} evt An event, not used.
     * @param {{}} searchParams The passed search parameters.
     * @returns {void}
     */
    ctrl.render = function (evt, searchParams) {
      headerPromise.then(function (header) {
        // If the search params are empty, update nothing.
        if (searchParams.length === 0) {
          return;
        }

        var about = header.about.default || {priority: 100000, text: null};
        angular.forEach(searchParams, function (tag) {
          if (header.about.hasOwnProperty(tag) &&
            header.about[tag].priority < about.priority) {
            about = header.about[tag];
          }
        });
        ctrl.text = about.text;
      });
    };

    $scope.$on('$destroy', $scope.$on('invalidate', ctrl.render));

  });
