import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../models/login-logout/authentication.service';
import { UserService } from '../../models/login-logout/user.service';
import { first } from 'rxjs/operators';
import { User } from '../../models/login-logout/user';
import { LoginStatusService } from '../../models/login-logout/login-status.service';
import { Subscription } from 'rxjs';
import { GenreService } from '../../models/genre.service';
import { BannerService } from '../../models/banner.service';

@Component({
    selector: 'ap-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit{
    userNew: User = new User();
    status: Boolean;
    statusUser: Boolean = false;
  
    public itemCount: number;
  
    constructor(
      private userService: UserService,
      private loginStatusService: LoginStatusService,
      private authenticationService: AuthenticationService
    ) {
      loginStatusService.status$.subscribe(
        status => {
          this.status = status;
          if (status) {
            this.getUser();
          }
          this.userNew = JSON.parse(localStorage.getItem('currentUser'));
          console.log(this.status);
        }
      );
   
    }
  
    ngOnInit(): void {
      this.checkToken();
    }
  
  
 
    checkToken() {
      if ( localStorage.getItem('currentUser')) {
        this.statusUser = true;
        this.loginStatusService.setStatus(this.statusUser);
        this.getUser();
      } else {
        this.loginStatusService.setStatus(this.statusUser);
      }
      console.log('check')
    }
   
    getUser(): void {
        this.userService.getAll().pipe(first()).subscribe(_ =>
            this.userNew = _.user)
            console.log('getUser')
    }
    logout(): void {
        this.authenticationService.logout();
        this.loginStatusService.setStatus(false);
        console.log('logout')
      }
  
}
