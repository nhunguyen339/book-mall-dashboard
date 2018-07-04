import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../models/login-logout/authentication.service';
import { UserService } from '../../models/login-logout/user.service';
import { first } from 'rxjs/operators';
import { User } from '../../models/login-logout/user';
import { LoginStatusService } from '../../models/login-logout/login-status.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ap-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit{
    userNew: User = new User();
    status : Boolean;
    loginStatus : Subscription;

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private loginStatusService: LoginStatusService,
    ) {
        this.loginStatus = this.loginStatusService.status$.subscribe(
            status => {
                this.status = status;
                this.userNew = JSON.parse(localStorage.getItem('currentUser'));
                console.log(this.userNew)
            }
        );
        this.getUser();
    }
    
    ngOnInit() {
        
    }
   

    logout(): void {
        this.authenticationService.logout();
    }
    getUser(): void {
        this.userService.getAll().pipe(first()).subscribe(_ =>
            this.userNew = _.user)
            console.log('getUser')
    }
  
}
