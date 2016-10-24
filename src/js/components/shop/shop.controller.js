(function() {

  'use strict';

  angular
    .module('teaApp.components.shop', [])
    .controller('shopController', shopController);

  shopController.$inject = ['ShopService', '$rootScope', '$scope'];

  function shopController(ShopService, $rootScope, $scope) {
    /* jshint validthis: true */

    $scope.quantity = '1';

    $rootScope.incart = 0;

    $rootScope.cart = [];

    var newItem;

    this.add = function(quantity, tea) {

      var price = tea.price / 100 * parseInt(quantity);

      // clean this up

      if (!$rootScope.cart.length) {
        $rootScope.cart.push({ quantity:parseInt(quantity), price:price, tea:tea });
        $rootScope.incart = parseInt(quantity);
      } else {

        $rootScope.cart.forEach(function(item) {

          if (item.tea.name === tea.name) {
            $rootScope.incart += parseInt(quantity);
            item.quantity += parseInt(quantity);
            item.price += tea.price / 100 * parseInt(quantity);
          } else {
            newItem = true;
          }

        });
      }

      if (newItem) {
        $rootScope.incart += parseInt(quantity);
        $rootScope.cart.push({ quantity:parseInt(quantity), price:price, tea:tea });
      }
    }

    this.shop = ShopService.shop();
    var categories = [];
    this.shop.forEach(function(tea) {
      tea.categories.forEach(function(catagory) {
        if (!categories.length) {
          categories.push(catagory);
        } else if (!categories.includes(catagory)) {
          categories.push(catagory);
        }
      });
    });
    $rootScope.categories = categories;
  }

})();
