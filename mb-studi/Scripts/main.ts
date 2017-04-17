/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
requirejs.config({
    baseUrl: "Scripts/app",
    paths: {
        "jquery": "../jquery-1.10.2.min",
        "bootstrap": "../bootstrap",
        "app": "./app",
        "angular": "../angular",
        "ngRoute": "../angular-route",
        "uiRouter":"../angular-ui-router",
        "user-service": "./user.service",
        "user-component": "./user.component",
        "login-component":"./login.component"
    },
    shim: {
        "angular": {
            exports: 'angular',
            deps: ['jquery']
        },
        "ngRoute": {
            exports: 'ngRoute',
            deps: ['angular']
        },
        "uiRouter": {
            exports: 'ui-router',
            deps: ['angular']
        },
        "bootstrap": ['jquery']
    }
});


requirejs(['app', 'bootstrap', 'angular', 'ngRoute', 'uiRouter'], (app, bootstrap, angular, ngRoute, uiRouter) => {
    var mainApp = new app.mainApp();
    angular.element(document).ready(() => {
        angular.bootstrap(document, ['mainApp']);
    });
});