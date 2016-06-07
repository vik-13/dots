;(function() {
    angular
        .module('login')
        .controller('LoginController', LoginController);

    /*ngInject*/
    function LoginController($scope, $state, loginService) {
        $scope.errorMessage = false;
        $scope.formData = {};
        $scope.login = login;

        function login(event) {
            event.preventDefault();

            $scope.errorMessage = false;

            loginService
                .login($scope.formData)
                .then(function() {
                    $state.go('dashboard');
                }, function() {
                    $scope.errorMessage = true;
                });
        }
    }
})();