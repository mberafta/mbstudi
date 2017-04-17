define(["require", "exports", 'angular', './user.component', './login.component', './users.service'], function (require, exports, angular, user_component_1, login_component_1, users_service_1) {
    "use strict";
    var mainApp = (function () {
        function mainApp() {
            // Components
            var testComponent = new user_component_1.userModule.UsersComponent();
            var loginComponent = new login_component_1.loginModule.LoginComponent();
            // Initialisation du module principale, des composants et des services
            angular.module('mainApp', ['ngRoute', 'ui.router'])
                .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                        .state('users', {
                        url: '/users',
                        template: '<users></users>'
                    })
                        .state('login', {
                        url: '/login',
                        template: '<login></login>'
                    });
                }])
                .component('users', testComponent)
                .component('login', loginComponent)
                .service('userService', users_service_1.userServiceModule.userService);
        }
        return mainApp;
    }());
    exports.mainApp = mainApp;
});
//# sourceMappingURL=app.js.map