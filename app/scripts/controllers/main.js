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
        };

        $scope.basketCart = function (userData, cart) {
            console.log(userData, cart);

            if ($scope.basketCartForm.$valid) {
                producto.sendsalesCart(userData, cart).then(function successCallback(response) {

                    console.log(response);
                    if (response.data.status) {
                        swal("Gracias!", "Pronto nos contactaremos contigo!", "success");

                    } else {
                        swal("Ups!", "ha ocurrido un error, por favor intenta de nuevo!", "error");

                    }
                }, function errorCallback(response) {
                    console.log(response);
                });
            }

        };

    });
