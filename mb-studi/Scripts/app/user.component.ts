import { userServiceModule } from './users.service';

export module userModule {

    interface IUsersComponentBindings {
        textBinding: string;
        dataBinding: number;
        functionBinding: () => any;
    }

    interface IUsersComponentController extends IUsersComponentBindings {
        getUsers(): void;
        addUser(user: Object): void;
        enableNewUserForm(): void;
        getCurrentUser(): boolean;
        logout(): void;
    }

    export class UsersComponentController implements IUsersComponentController {

        public textBinding: string;
        public dataBinding: number;
        public users: any[] = [];
        public file: any;

        public newUser: Object = {
            Id: null,
            FirstName: "",
            LastName: "",
            Email: "",
            Password: "",
            Token: ""
        }

        // Pattern pour contrôler la validité de l'adresse mail du nouvel utilisateur
        private emailPattern = /\S+@\S+\.\S+/;

        public editNewUser: boolean = false;

        public functionBinding: () => any;
        static $inject = ['userService', '$state'];

        constructor(private userService: userServiceModule.userService, private $state: angular.ui.IStateService) {
            this.textBinding = '';
            this.dataBinding = 0;
        }

        $onInit() {
            var currentUser = localStorage.getItem('currentUser');
            if (currentUser) {
                this.getUsers();
            }
            else {
                this.$state.go('login');
            }
        }

        // Récupération des utilisateurs
        getUsers(): void {
            this.userService.getUsers()
                .then(users => this.users = users)
                .catch(error => console.log(error));
        }

        // Affichage du formulaire d'ajout du nouvel utilisateur
        enableNewUserForm(): void {
            this.editNewUser = !this.editNewUser;
        }

        // Ajout d'un nouvel utilisateur
        addUser(): void {
            this.userService.addUser(this.newUser)
                .then(user => {
                    this.users.push(user);
                    this.enableNewUserForm();
                })
                .catch(error => console.log(error));
        }

        getCurrentUser(): boolean {
            var currentUser = localStorage.getItem('currentUser');
            if (currentUser)
                return true;
            else
                return false;
        }

        logout(): void {
            localStorage.removeItem('currentUser');
            this.$state.go('login');
        }

    }

    export class UsersComponent implements ng.IComponentOptions {

        public bindings: any;
        public controller: any;
        public templateUrl: string;

        constructor() {
            this.bindings = {
                textBinding: '@',
                dataBinding: '<',
                functionBinding: '&'
            };
            this.controller = UsersComponentController;
            this.templateUrl = '/User/Info';
        }

    }

}