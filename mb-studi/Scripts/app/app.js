(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'angular', './user.component', './login.component', './users.service'], factory);
    }
})(function (require, exports) {
    "use strict";
    var angular = require('angular');
    // Components
    var user_component_1 = require('./user.component');
    var login_component_1 = require('./login.component');
    // Services
    var users_service_1 = require('./users.service');
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