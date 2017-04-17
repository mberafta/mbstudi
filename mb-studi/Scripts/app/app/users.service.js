define(["require", "exports"], function (require, exports) {
    "use strict";
    var userServiceModule;
    (function (userServiceModule) {
        var userService = (function () {
            function userService(http) {
                this.http = http;
                this.config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                this.baseUrl = '/api/User/';
            }
            userService.prototype.getUsers = function () {
                var action = "GetUsers";
                return this.http.get(this.baseUrl + action, this.config)
                    .then(function (result) { return result.data; });
            };
            userService.prototype.addUser = function (user) {
                var action = "AddUser";
                return this.http.post(this.baseUrl + action, user, this.config)
                    .then(function (result) { return result.data; });
            };
            userService.prototype.login = function (email, password) {
                var action = "Login";
                var loginViewModel = { Email: email, Password: password };
                return this.http.post(this.baseUrl + action, loginViewModel, this.config)
                    .then(function (result) { return result.data; });
            };
            userService.$inject = ['$http'];
            return userService;
        }());
        userServiceModule.userService = userService;
    })(userServiceModule = exports.userServiceModule || (exports.userServiceModule = {}));
});
//# sourceMappingURL=users.service.js.map