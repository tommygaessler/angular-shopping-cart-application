// sample angular code

(function() {

  'use strict';

  angular
    .module('teaApp', [
      'ngRoute',
      'teaApp.config',
      'teaApp.components.shop',
      'teaApp.components.cart'
    ]);

})();
