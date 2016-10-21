(function() {

  'use strict';

  angular
    .module('teaApp.components.shop', [])
    .controller('shopController', shopController);

  shopController.$inject = ['$scope'];

  function shopController($scope) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
  }

})();
