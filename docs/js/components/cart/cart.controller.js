(function() {

  'use strict';

  angular
  .module('teaApp.components.cart', [])
  .controller('cartController', cartController);

  cartController.$inject = ['$rootScope', '$scope'];

  function cartController($rootScope, $scope) {
    /* jshint validthis: true */
    $scope.delete = function(tea) {
      var index = $rootScope.cart.indexOf(tea);
      $rootScope.cart.splice(index, 1);
    };

    var total = 0;

    if ($rootScope.cart.length) {
      $rootScope.cart.forEach(function(tea) {
        total += tea.price;
      });
    }

    this.total = total;
  }

})();
