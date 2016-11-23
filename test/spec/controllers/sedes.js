'use strict';

describe('Controller: SedesCtrl', function () {

  // load the controller's module
  beforeEach(module('kronosFrontendApp'));

  var SedesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SedesCtrl = $controller('SedesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SedesCtrl.awesomeThings.length).toBe(3);
  });
});
