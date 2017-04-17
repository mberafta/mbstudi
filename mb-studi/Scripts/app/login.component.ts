import { userServiceModule } from './users.service';

export module loginModule {

    interface ILoginComponentBindings {
        textBinding: string;
        dataBinding: number;
    }

    interface ILoginComponentController extends ILoginComponentBindings {
        authenticate(): void;
    }

    export class LoginComponentController implements ILoginComponentController {
        public textBinding: string;
        public dataBinding: number;
        public errorMessage: string;

        public user: any = {
            Email: "",
            Password: "",
        };

        static inject = ['$state'];

        constructor(private userService: userServiceModule.userService, private $state: angular.ui.IStateService) {

        }

        authenticate(): void{
            this.errorMessage = null;
            this.userService.login(this.user.Email, this.user.Password)
                .then((result: any) => {
                    if (result && (result.Id != "00000000-0000-0000-0000-000000000000" && result.Token)) {
                        localStorage.setItem('currentUser', result);
                        this.$state.go('users');
                    }
                    else {
                        this.errorMessage = "Les identifiants saisis ne correspondent pas à un utilisateur connu"
                    }
                })
                .catch(error => console.log(error));
        }

    }

    export class LoginComponent implements ng.IComponentOptions {
        public bindings: any;
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.bindings = {
                textBinding: '@',
                dataBinding: '<',
                functionBinding: '&'
            };
            this.controller = LoginComponentController;
            this.templateUrl = '/Login/Login';
        }
    }

}