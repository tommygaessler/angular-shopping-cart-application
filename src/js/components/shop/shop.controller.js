(function() {

  'use strict';

  angular
    .module('teaApp.components.shop', [])
    .controller('shopController', shopController);

  shopController.$inject = ['ShopService', '$rootScope'];

  function shopController(ShopService, $rootScope) {
    /* jshint validthis: true */
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
