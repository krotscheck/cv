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
