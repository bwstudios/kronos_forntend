'use strict';

/**
 * @ngdoc service
 * @name kronosFrontendApp.contactenos
 * @description
 * # contactenos
 * Service in the kronosFrontendApp.
 */
angular.module('kronosFrontendApp')
  .service('contactenos', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      sendSugest: function (contactData) {
        return $http({
          method: 'POST',
          url: 'http://distrinetapi.azurewebsites.net/web/app.php/api/productos/contact_us_mail',
          headers: {
            "Authorization": "Basic YnJhaW5fZnJlZXplX2FkbWluOjN3NXR1ZDEwNQ==",
            //"Access-control-allow-origin": "*"
            "content-type": "application/json"
          },
          data: {
            clientEmail: contactData.clientEmail,
            clientName: contactData.clientName,
            subject: contactData.subject,
            comments: contactData.comments
          }
        });

      }
    }
  });
