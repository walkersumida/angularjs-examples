angular.module('app', ['ngAnimate', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'views/todo.html',
                controller: 'TodoController',
                controllerAs: 'todo'
            });
    }]);
