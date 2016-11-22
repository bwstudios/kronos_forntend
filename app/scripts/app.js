'use strict';

/**
 * @ngdoc overview
 * @name kronosFrontendApp
 * @description
 * # kronosFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('kronosFrontendApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ProductoCtrl',
        controllerAs: 'producto'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/productos', {
        templateUrl: 'views/producto.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
    })
      .when('/acercade', {
        templateUrl: 'views/acercade.html',
        controller: 'AcercadeCtrl',
        controllerAs: 'acercade'
      })
      .when('/sedes', {
        templateUrl: 'views/sedes.html',
        controller: 'SedesCtrl',
        controllerAs: 'sedes'
      })
      .when('/contactenos', {
        templateUrl: 'views/contactenos.html',
        controller: 'ContactenosCtrl',
        controllerAs: 'contactenos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
