'use strict';

/**
 * @ngdoc function
 * @name kronosFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kronosFrontendApp
 */
angular.module('kronosFrontendApp')
    .controller('MainCtrl', function ($scope, producto) {
        $scope.cartS = producto.getCars();

        $scope.removeCar = function (index) {
            producto.removeCart(index);
        }


    });
