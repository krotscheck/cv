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
