define(["require", "exports"], function (require, exports) {
    "use strict";
    var testModule;
    (function (testModule) {
        var UsersComponentController = (function () {
            function UsersComponentController(userService) {
                this.userService = userService;
                this.users = [];
                this.textBinding = '';
                this.dataBinding = 0;
            }
            UsersComponentController.prototype.$onInit = function () {
                this.getUsers();
            };
            UsersComponentController.prototype.getUsers = function () {
                var _this = this;
                this.userService.getUsers().then(function (users) { return _this.users = users; });
            };
            UsersComponentController.$inject = ['userService'];
            return UsersComponentController;
        }());
        testModule.UsersComponentController = UsersComponentController;
        var UsersComponent = (function () {
            function UsersComponent() {
                this.bindings = {
                    textBinding: '@',
                    dataBinding: '<',
                    functionBinding: '&'
                };
                this.controller = UsersComponentController;
                this.templateUrl = '/User/Info';
            }
            return UsersComponent;
        }());
        testModule.UsersComponent = UsersComponent;
    })(testModule = exports.testModule || (exports.testModule = {}));
});
//# sourceMappingURL=test.component.js.map