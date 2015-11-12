angular.module('resume').directive('ngDelete', function () {
  'use strict';

  return function (scope, element, attrs) {

    element.bind('keydown keypress', function (event) {
      if (event.which === 8) {
        var preventDefault = false;

        scope.$apply(function () {
          preventDefault = scope.$eval(attrs.ngDelete);
        });

        if (preventDefault) {
          event.preventDefault();
        }
      }
    });
  };
});
