"use strict";
import angular = require('angular');

export module userServiceModule {

    export class userService {

        static $inject = ['$http'];

        config: angular.IRequestShortcutConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        private baseUrl: string = '/api/User/';

        constructor(private http: angular.IHttpService) {

        }

        getUsers(): angular.IPromise<Object[]> {
            var action = "GetUsers"
            return this.http.get(this.baseUrl + action, this.config)
                .then(
                (result: any) => result.data
                );
        }

        addUser(user: Object): angular.IPromise<Object> {
            var action = "AddUser";
            return this.http.post(this.baseUrl + action, user, this.config)
                .then(
                (result) => result.data
                );
        }

        login(email: string, password: string) {
            var action = "Login";
            var loginViewModel = { Email: email, Password: password };
            return this.http.post(this.baseUrl + action, loginViewModel, this.config)
                .then(result => result.data);
        }
    }

}