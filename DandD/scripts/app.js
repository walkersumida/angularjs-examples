angular.module('app', ['ngAnimate', 'ui.router', 'as.sortable'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'views/kanban.html',
                controller: 'KanbanController',
                controllerAs: 'kanban'
            });
    }]);
