'use strict';

describe('Phone', function() {
  var $httpBackend;
  var Phone;
  var phonesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];

 
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });
  
  beforeEach(module('core.phone'));

  beforeEach(inject(function(_$httpBackend_, _Phone_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').respond(phonesData);

    Phone = _Phone_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/phones/phones.json`', function() {
    var phones = Phone.query();

    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });

});
