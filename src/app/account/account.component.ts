import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/login-logout/user';
import { UserService } from '../models/login-logout/user.service';
import { AuthenticationService } from '../models/login-logout/authentication.service';
import { LoginStatusService } from '../models/login-logout/login-status.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userNew: User = new User();
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private loginStatusService: LoginStatusService
  ) { 
    
  }

  ngOnInit() {
    this.getUser();
  }
  logout(): void {
    this.authenticationService.logout();
    this.loginStatusService.setStatus(false);
    console.log('logout')
  }
  getUser():void {
    this.userService.getAll().pipe(first()).subscribe(_ =>
      this.userNew = _.user)
  }

}
