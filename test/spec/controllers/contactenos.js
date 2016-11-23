'use strict';

describe('Controller: ContactenosCtrl', function () {

  // load the controller's module
  beforeEach(module('kronosFrontendApp'));

  var ContactenosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactenosCtrl = $controller('ContactenosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactenosCtrl.awesomeThings.length).toBe(3);
  });
});
