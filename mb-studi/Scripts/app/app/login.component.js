define(["require", "exports"], function (require, exports) {
    "use strict";
    var loginModule;
    (function (loginModule) {
        var LoginComponentController = (function () {
            function LoginComponentController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
                this.user = {
                    Email: "",
                    Password: "",
                };
            }
            LoginComponentController.prototype.authenticate = function () {
                var _this = this;
                this.errorMessage = null;
                this.userService.login(this.user.Email, this.user.Password)
                    .then(function (result) {
                    if (result && (result.Id != "00000000-0000-0000-0000-000000000000" && result.Token)) {
                        localStorage.setItem('currentUser', result);
                        _this.$state.go('users');
                    }
                    else {
                        _this.errorMessage = "Les identifiants saisis ne correspondent pas à un utilisateur connu";
                    }
                })
                    .catch(function (error) { return console.log(error); });
            };
            LoginComponentController.inject = ['$state'];
            return LoginComponentController;
        }());
        loginModule.LoginComponentController = LoginComponentController;
        var LoginComponent = (function () {
            function LoginComponent() {
                this.bindings = {
                    textBinding: '@',
                    dataBinding: '<',
                    functionBinding: '&'
                };
                this.controller = LoginComponentController;
                this.templateUrl = '/Login/Login';
            }
            return LoginComponent;
        }());
        loginModule.LoginComponent = LoginComponent;
    })(loginModule = exports.loginModule || (exports.loginModule = {}));
});
//# sourceMappingURL=login.component.js.map