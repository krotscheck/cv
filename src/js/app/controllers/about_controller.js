angular.module('resume').controller('AboutController',
  function($scope, Header) {
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
    ctrl.render = function(evt, searchParams) {
      var showEverything = searchParams.indexOf('Everything') > -1;

      headerPromise.then(function(header) {
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
