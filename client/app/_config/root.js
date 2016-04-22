(function(){
    "use strict";
    angular.module('todos').controller('RootCtrl',RootCtrl);


    RootCtrl.$inject = ['TodoService'];

    function RootCtrl(Todos){
        var vm = this;
        vm.title = 'Todos';
        vm._todos = Todos;
        vm.newTodo={};

    }


})();