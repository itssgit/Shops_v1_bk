(function () {
    'use strict';
    angular.module('app').service('SigninService', SigninService);
    SigninService.$inject = ['HttpService'];
    function SigninService(HttpService) {
        var vm = this;

        vm.login = function(data, onSuccess, onError) {
            var serviceUrl = "https://reqres.in/api/login";
            HttpService.callService(serviceUrl, data, onSuccess, onError);
        };
    }
})();
