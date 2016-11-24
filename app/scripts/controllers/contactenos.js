'use strict';

/**
 * @ngdoc function
 * @name kronosFrontendApp.controller:ContactenosCtrl
 * @description
 * # ContactenosCtrl
 * Controller of the kronosFrontendApp
 */
angular.module('kronosFrontendApp')
  .controller('ContactenosCtrl', function ($scope, contactenos) {
    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    $scope.contactUs = function (contactUS) {
        console.log(contactUS);

        /*if ($scope.contactUs.$valid) {*/
            contactenos.sendSugest(contactUS).then(function successCallback(response){
                if (response.data.status) {
                    console.log(response);
                    swal("Gracias!", "Hemos recibido tu comentario, responderemos lo mas pronto posible", "success");
                } else {
                    console.log(response);
                    swal("Ups!", "Ha ocurrido un error, por favor revisa los campos!", "error");

                }
            }, function errorCallback(response) {
                console.log(response);
            });
        /*} else {
            swal("Ups!", "error de la puta madre!", "error");
        }*/
    }
  });
