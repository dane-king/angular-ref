(function() {
  'use strict';
  describe('Constants', function() {
    var $injector;
    beforeEach(module('app.common'));
    beforeEach(inject(function (_$injector_) {
      $injector=_$injector_;
    }));
    describe('Product Image Service', function() {
      it("should have the correct api key", function () {
        expect($injector.get('product_image_key')).toEqual('389dd33d3db4081276f1acc55303044d');
      });
    });
    describe('Food Service', function() {
      it("should have the correct api key", function () {
        expect($injector.get('usda_key')).toEqual('NjSdSG2LaQdQ7SYaL5xy0d6tyhsE2UOwhVdmp0Es');
      });
      it("should have the correct url", function () {
        expect($injector.get('usda_url')).toEqual('http://api.nal.usda.gov/ndb/search/?format=json&sort=n');
      });

    });
  });
}());
