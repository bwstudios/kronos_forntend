'use strict';

/**
 * @ngdoc service
 * @name kronosFrontendApp.producto
 * @description
 * # producto
 * Factory in the kronosFrontendApp.
 */
angular.module('kronosFrontendApp')
    .factory('producto', function ($http) {
        // Service logic
        // ...

        var cartR = [];

        var meaningOfLife = 42;

        // Public API here
        return {
            getProducts: function () {
                return $http({
                    withCredentials: false,
                    method: 'POST',
                    url: 'http://distrinetapi.azurewebsites.net/web/app.php/api/productos/get_all',
                    headers: {
                        "Authorization": "Basic YnJhaW5fZnJlZXplX2FkbWluOjN3NXR1ZDEwNQ=="
                        //"Access-control-allow-origin": "*"
                        //"content-type": "application/json"
                    }
                });
            },
            getCart: function (cart) {
                cartR.push(cart);
                return cartR;
            },
            getCars: function () {
                return cartR;
            }
        };
    });
