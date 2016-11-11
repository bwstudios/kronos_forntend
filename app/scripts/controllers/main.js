'use strict';

/**
 * @ngdoc function
 * @name kronosFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kronosFrontendApp
 */
angular.module('kronosFrontendApp')
    .controller('MainCtrl', function ($scope) {

$scope.products = [
    {
        "id": 1,
        "productName": "producto1",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat10824?$Redesing223$",
        "productCategoryName": "ferretería",
        "isInStock": true
    },
    {
        "id": 2,
        "productName": "producto2",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat290012?$Redesing223$",
        "productCategoryName": "ferretería",
        "isInStock": true
    },
    {
        "id": 3,
        "productName": "producto3",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat290012?$Redesing223$",
        "productCategoryName": "ferretería",
        "isInStock": true
    },
    {
        "id": 4,
        "productName": "producto1",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat290012?$Redesing223$",
        "productCategoryName": "ferretería",
        "isInStock": true
    },
    {
        "id": 5,
        "productName": "producto5",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat300009?$Redesing223$",
        "productCategoryName": "Maquinaria pesada",
        "isInStock": true
    },
    {
        "id": 6,
        "productName": "producto6",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat300009?$Redesing223$",
        "productCategoryName": "Maquinaria pesada",
        "isInStock": true
    },
    {
        "id": 7,
        "productName": "producto7",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat300009?$Redesing223$",
        "productCategoryName": "Maquinaria pesada",
        "isInStock": true
    },
    {
        "id": 8,
        "productName": "producto8",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat860020?$Redesing223$",
        "productCategoryName": "herramientas manual",
        "isInStock": true
    },
    {
        "id": 9,
        "productName": "producto9",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat860020?$Redesing223$",
        "productCategoryName": "herramientas manual",
        "isInStock": true
    },
    {
        "id": 10,
        "productName": "producto10",
        "productImage": "http://homecenterco.scene7.com/is/image/SodimacCO/cat860020?$Redesing223$",
        "productCategoryName": "herramientas manual",
        "isInStock": true
    }


];


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
