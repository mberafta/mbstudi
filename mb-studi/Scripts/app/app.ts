"use strict";
import angular = require('angular');

// Components
import { userModule } from './user.component';
import { loginModule } from './login.component';

// Services
import { userServiceModule } from './users.service';

export class mainApp {
    constructor() {

        // Components
        var testComponent = new userModule.UsersComponent();
        var loginComponent = new loginModule.LoginComponent();

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
            .service('userService', userServiceModule.userService);

    }
}