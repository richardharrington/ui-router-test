'use strict';

angular
.module('uiRouterApp', [
  'ngResource',
  'ui.router'
])
.config(function ($stateProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    template: 'hello {{name}}',
    controller: function($scope) {
      $scope.name = 'Worild';
    }
  });
})
.run(function($state) {
  $state.go('home');
});