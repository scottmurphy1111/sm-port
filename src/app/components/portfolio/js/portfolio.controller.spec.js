(function() {
  'use strict';

  describe('controller', function(){
    var myScope, vm;

    beforeEach(module('website'));
    beforeEach(inject(function($controller, $rootScope) {
      myScope = $rootScope.$new();
      vm = $controller('PortfolioCtrl', {
        $scope: myScope
      });
    }));

    describe('load main content setup', function() {
      it('should load main content', function() {
        expect(vm.loadMainContent).toBe(false);
      });

    });

    describe('load main content init', function() {
      it('should load main content', function($timeout) {
        $timeout.flush(1000);
        expect(vm.loadMainContent).toBe(true);
      });

    });

    describe('setup page function', function() {
      it('should show that setuppage is defined', function() {
        expect(vm.setUpPage).toBeDefined();
      });
    });

  });
})();
