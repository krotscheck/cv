angular.module('resume').controller('ResumeController',
  function($scope, Event) {
    'use strict';

    $scope.education = Event.query("education");
    $scope.jobs = Event.query("job");
    $scope.presentations = Event.query("presentation");
    $scope.projects = Event.query("project");
    $scope.hobbies = Event.query("hobby");
    $scope.awards = Event.query("award");
  });
