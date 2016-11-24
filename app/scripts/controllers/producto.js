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
        $scope.cartArray = [];
        $scope.loading = true;

        producto.getProducts().then(function successCallback(response) {
            $scope.loading = false;
            console.log(response);
            if (response.data.status) {
                $scope.products = response.data.productsArray;
            } else {

            }
        }, function errorCallback(response) {

        });

        $scope.addCar = function (idProducto) {

            if (producto.getCart(idProducto) === 0) {
                swal("", "Este producto ya ha sido agregado al carrito!", "warning");
            } else {
                producto.getCart(idProducto);
            }
        };

        $scope.cartArray = producto.getCars();


        //Template Properties
        $('#list').click(function (event) {
            event.preventDefault();
            $('#products .item').addClass('list-group-item');
        });
        $('#grid').click(function (event) {
            event.preventDefault();
            $('#products .item').removeClass('list-group-item');
            $('#products .item').addClass('grid-group-item');
        });


    });
