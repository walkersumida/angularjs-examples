angular.module('app')
    .controller('TodoController', [function () {
        this.data = window.TodoApp.todo.data;
        this.new = '';

        this.add = function add() {
            this.data.push({id: this._maxId() + 1, title: this.new});
            this.new = '';
        };

        this.clear = function clear() {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].done === true) {
                    this.data[i].hidden = true;
                }
            }
        };

        this.existsDone = function existsDone() {
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].hidden === true) {
                    continue;
                }
                if (this.data[i].done === true) {
                    return true;
                }
            }
            return false;
        };

        this.toggleDone = function toggleDone(rcd) {
            rcd.done = !rcd.done;
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
