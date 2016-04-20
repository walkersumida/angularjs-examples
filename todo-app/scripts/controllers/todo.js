angular.module('app')
    .controller('TodoController', [function () {
        this.data = window.TodoApp.todo.data;
    }]);
