"use strict";

let app = angular.module('doorbellDashApp', ['ngRoute']).constant('apiUrl', "http://localhost:8000");

app.config(($locationProvider, $routeProvider, $httpProvider) => {

  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
  $httpProvider.defaults.withCredentials = true;

  $routeProvider
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/images', {
      templateUrl: 'partials/images.html',
      controller: 'imagesCtrl'
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .when('/chat', {
      templateUrl: 'partials/chat.html',
      controller: 'chatCtrl'
    })
    .otherwise('/home');
  $locationProvider.hashPrefix('');

  // angular.module('Bangazon').factory('RootFactory', [
  //   "$http",
  //   "apiUrl",
  //   ($http, apiUrl) => {
  //     const httpGet = $http.get(apiUrl);

  //     return {
  //       getApiRoot() {
  //         return httpGet.then(res => res.data);
  //       }
  //     };
  //   }
  // ]);
});
