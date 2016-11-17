'use strict';

/**
 * @ngdoc function
 * @name kronosFrontendApp.controller:ProductoCtrl
 * @description
 * # ProductoCtrl
 * Controller of the kronosFrontendApp
 */
angular.module('kronosFrontendApp')
    .controller('ProductoCtrl', function ($scope, producto) {

        $scope.products = [];

        producto.getProducts().then(function successCallback(response) {
            console.log(response);
            // if (response.data.status) {
            $scope.products = response.data.prodcutos;
            /*} else {

             }*/
        }, function errorCallback(response) {

        });

        $scope.addCar = function () {

        }

    });
