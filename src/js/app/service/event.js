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
