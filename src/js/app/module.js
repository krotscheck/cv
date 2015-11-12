angular.module("resume", ["ui.router", "ngResource"])
  .config(function($urlRouterProvider, $httpProvider, $stateProvider) {
    "use strict";

    $stateProvider
      .state("root", {
        url: "?tags",
        templateUrl: "view/index.html",
        controller: "RootController as root"
      });
  });
