'use strict';

describe('Controller: AcercadeCtrl', function () {

  // load the controller's module
  beforeEach(module('kronosFrontendApp'));

  var AcercadeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcercadeCtrl = $controller('AcercadeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AcercadeCtrl.awesomeThings.length).toBe(3);
  });
});
