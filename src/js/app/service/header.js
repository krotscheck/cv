angular.module('resume').service('Header',
  function ($http, $q) {
    'use strict';

    var deferred;

    function getHeader () {
      if (!deferred) {
        deferred = $q.defer();
        $http({
          method: 'GET',
          url: './data/header.json'
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
        var header = {};
        header.$promise = getHeader();
        header.$resolved = false;
        header.$promise.then(function (result) {
          angular.copy(result, header);
          header.$resolved = true;
        }, function () {
          header.$resolved = true;
        });

        return header;
      }
    };
  });
