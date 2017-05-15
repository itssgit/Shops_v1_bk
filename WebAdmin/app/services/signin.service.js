(function () {
    'use strict';
    angular.module('app').service('SigninService', SigninService);
    SigninService.$inject = ['HttpService'];
    function SigninService(HttpService) {

        this.login = function(data, onSuccess, onError) {
            var serviceUrl = "http://smallandsimple.ddns.net/management-posts/api/admin/account?pageNum=0&pageSize=100&sortBy=id&sortOrder=descending&isShowInactive=false";
            // var serviceUrl = "http://smallandsimple.ddns.net/management-posts/api/admin/account";
            HttpService.callGetService(serviceUrl, onSuccess, onError);
        };
    }
})();
