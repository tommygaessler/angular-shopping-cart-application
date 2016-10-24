(function() {

  'use strict';

  angular
    .module('teaApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: './js/components/shop/shop.view.html',
      controller: 'shopController',
      controllerAs: 'shopCtrl'
    })
    .when('/cart', {
      templateUrl: './js/components/cart/cart.view.html',
      controller: 'cartController',
      controllerAs: 'cartCtrl'
    })
    .otherwise('/');
  }

})();
