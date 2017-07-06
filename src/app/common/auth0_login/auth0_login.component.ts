import {Component} from "@angular/core";
import {Auth0Service} from "./auth0.service";

@Component({
    moduleId: module.id,
    selector: 'auth0',
    templateUrl:'auth0_login.component.html',
    providers:[Auth0Service]
})

export class Auth0Component {
    title = 'Daily Deals';

    //Chek auth0 service
    constructor(private auth: Auth0Service) {
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }

}
