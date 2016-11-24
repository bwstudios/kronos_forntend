'use strict';

describe('Service: contactenos', function () {

  // load the service's module
  beforeEach(module('kronosFrontendApp'));

  // instantiate service
  var contactenos;
  beforeEach(inject(function (_contactenos_) {
    contactenos = _contactenos_;
  }));

  it('should do something', function () {
    expect(!!contactenos).toBe(true);
  });

});
