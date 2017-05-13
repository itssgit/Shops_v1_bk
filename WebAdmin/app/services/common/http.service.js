(function () {
    'use strict';
    angular.module('app')
        .service('HttpService', HttpService);

    HttpService.$inject = ['$http'];

    function HttpService($http) {
        var vm = this;

        vm.callService = function (url, data, onSuccess, onError) {
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*'
                        // 'captcha-key':"captcha-123"
                    },
                    data: data
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                        onError(rejectResponse.data);
                });
        };
        
        vm.callServiceWithSessionHeader = function (url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                        // 'captcha-key':"captcha-123"
                    },
                    data: data
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };

        vm.callDownloadServiceWithSessionHeader = function(url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                    },
                    data: data,
                    responseType : 'arraybuffer'
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        };

        vm.callGetServiceWithSessionHeader = function (url, data, onSuccess, onError) {
            var sessionKey = '';
            $http(
                {
                    method: 'GET',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*',
                        'session-key': sessionKey
                    },
                    data: data
                }
            ).then(function (response) {
                    onSuccess(response.data);
                })
                .catch(function (rejectResponse) {
                    onError(rejectResponse.data);
                });
        }
    }
})();
