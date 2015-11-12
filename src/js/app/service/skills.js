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
