(function () {
    "use strict";

    angular.module('ams-moguls').factory('TodoService', TodoService);

    TodoService.$inject = ['$http'];

    function TodoService($http) {
        var vm = {};
        vm.todos_api = '/api/todos';
        vm.todos_delete_api = todos_delete;
        vm.ENUMS = Object.freeze({
                projects: {
                    AMS_MOGULS:'AMS_MOGULS',
                    AMS_SERVER:'AMS_SERVER'
                },
                priorities:{
                    HIGH:'HIGH',
                    MEDIUM:'MEDIUM',
                    LOW:'LOW'
                },

                types:{
                    TODO:'TODO',
                    UPDATE:'UPDATE',
                    FIX:'FIX'
                }
            });
        vm.todos = {
            count:0,
            list:[]
        };
        
        vm.init = function(){
            $http.get(vm.todos_api).then(function(result){
                vm.todos.count = result.data.count;
                vm.todos.list = result.data.rows;
            }).catch(function(error){
                console.log(error);
                vm.todos.list = error;
            });
        };
        vm.addTodo = function(todo){

            $http.post(vm.todos_api,{todo:todo}).then(function(){
                vm.init();
            }).catch(function(error){
                console.log(error);
            });
        };
        vm.deleteTodo = function(id){
            $http.get(vm.todos_delete_api(id)).then(function(){
                vm.init();
            }).catch(function(error){
                console.log(error);
            });
        };

        vm.init();
        return vm;


        function todos_delete(id){
            return vm.todos_api + '/delete/' + id;
        }
    }
})();