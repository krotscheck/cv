angular.module('resume').controller('EventController',
  function($scope, Event, $log) {
    'use strict';

    var ctrl = this;

    var eventPromise = Event.query().$promise;

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

      eventPromise.then(function(events) {
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
