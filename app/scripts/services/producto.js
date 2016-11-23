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
                if (cartR.indexOf(cart) === -1){
                    cartR.push(cart);
                    //console.log(cartR);
                    return cartR;
                }else{
                    return 0;
                }

            },
            getCars: function () {
                return cartR;
            },
            removeCart: function (index) {
                //console.log(index);
                cartR.splice(index, 1);
                return cartR;
            },

            sendsalesCart: function (userData, cart) {
                return $http({
                    method: 'POST',
                    url: 'http://distrinetapi.azurewebsites.net/web/app.php/api/productos/create_assist_sale',
                    headers: {
                        "Authorization": "Basic YnJhaW5fZnJlZXplX2FkbWluOjN3NXR1ZDEwNQ==",
                        //"Access-control-allow-origin": "*"
                        "content-type": "application/json"
                    },
                    data: {
                        clientEmail: userData.clientEmail,
                        clientLastName: "albeiro",
                        clientName: userData.clientName,
                        clientIdentification: "undefined",
                        clientPhone: userData.clientPhone,
                        observaciones: userData.observaciones,
                        clientTown: "",
                        clientIdentificationType: 1,
                        productsArray: cart
                    }
                });
            }
        };
    });
