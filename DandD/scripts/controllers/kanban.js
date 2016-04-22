angular.module('app')
    .controller('KanbanController', [function () {
        this.task = window.TaskApp.task;
    }]);
