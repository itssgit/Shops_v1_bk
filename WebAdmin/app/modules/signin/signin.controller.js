(function () {
    'use strict';
    // controller
    angular.module('app').controller('SigninCtrl', SigninCtrl);

    // dependencies
    SigninCtrl.$inject = ['SigninService','Cookies','$scope','$location','BindingService'];

    function SigninCtrl(SigninService, Cookies, $scope, $location, BindingService) {

        $scope.model = {
            key: '6LfjNyAUAAAAAEbHfAHZsBS8rjR2S5m_syM_v0DF'
        };
        
        var onLoginSuccess = function onLoginSuccess(data){
            BindingService.set(data);
            $location.path("/dashboard");
        };
        var onLoginError = function onLoginError (data) {
            alert("error" + data);    
        };
        this.login = function() {
            var data = {
                "email": "peter@klaven",
                "password": "cityslicka"
            };
            Cookies.set("user",data);
            SigninService.login(data, onLoginSuccess, onLoginError);
        };
    }
})();