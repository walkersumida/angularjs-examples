angular.module('app')
    .controller('TodoController', [function () {
        this.data = window.TodoApp.todo.data;
        this.new = '';

        this.add = function add() {
            this.data.push({id: this._maxId() + 1, title: this.new});
            this.new = '';
        };

        this._maxId = function _maxId() {
            ary = this.data;
            result = 0;
            for (var i = 0; i < ary.length; i++) {
                if (ary[i].id > result) {
                    result = ary[i].id;
                }
            }

            return result;
        };
    }]);
