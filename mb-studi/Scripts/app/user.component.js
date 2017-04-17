(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var userModule;
    (function (userModule) {
        var UsersComponentController = (function () {
            function UsersComponentController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
                this.users = [];
                this.newUser = {
                    Id: null,
                    FirstName: "",
                    LastName: "",
                    Email: "",
                    Password: "",
                    Token: ""
                };
                // Pattern pour contrôler la validité de l'adresse mail du nouvel utilisateur
                this.emailPattern = /\S+@\S+\.\S+/;
                this.editNewUser = false;
                this.textBinding = '';
                this.dataBinding = 0;
            }
            UsersComponentController.prototype.$onInit = function () {
                var currentUser = localStorage.getItem('currentUser');
                if (currentUser) {
                    this.getUsers();
                }
                else {
                    this.$state.go('login');
                }
            };
            // Récupération des utilisateurs
            UsersComponentController.prototype.getUsers = function () {
                var _this = this;
                this.userService.getUsers()
                    .then(function (users) { return _this.users = users; })
                    .catch(function (error) { return console.log(error); });
            };
            // Affichage du formulaire d'ajout du nouvel utilisateur
            UsersComponentController.prototype.enableNewUserForm = function () {
                this.editNewUser = !this.editNewUser;
            };
            // Ajout d'un nouvel utilisateur
            UsersComponentController.prototype.addUser = function () {
                var _this = this;
                this.userService.addUser(this.newUser)
                    .then(function (user) {
                    _this.users.push(user);
                    _this.enableNewUserForm();
                })
                    .catch(function (error) { return console.log(error); });
            };
            UsersComponentController.prototype.getCurrentUser = function () {
                var currentUser = localStorage.getItem('currentUser');
                if (currentUser)
                    return true;
                else
                    return false;
            };
            UsersComponentController.prototype.logout = function () {
                localStorage.removeItem('currentUser');
                this.$state.go('login');
            };
            UsersComponentController.$inject = ['userService', '$state'];
            return UsersComponentController;
        }());
        userModule.UsersComponentController = UsersComponentController;
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
        userModule.UsersComponent = UsersComponent;
    })(userModule = exports.userModule || (exports.userModule = {}));
});
//# sourceMappingURL=user.component.js.map