(function() {

  'use strict';

  angular
    .module('teaApp.components.shop', [])
    .controller('shopController', shopController);

  shopController.$inject = ['ShopService'];

  function shopController(ShopService) {
    /* jshint validthis: true */
    this.shop = ShopService.shop();
  }

})();
