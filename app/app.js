"use strict";


let app = angular.module('doorbellDashApp', ['ngRoute']).constant('apiUrl', "http://localhost:8000");

app.config(($locationProvider, $routeProvider, $httpProvider) => {

  // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  // $httpProvider.defaults.withCredentials = true;

  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    // .when('/login', {
    //   templateUrl: 'partials/login.html',
    //   controller: 'loginCtrl'
    // })
    .otherwise('/');
  $locationProvider.hashPrefix('');
});
