import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginStatusService } from './login-status.service';

@Injectable()
export class AuthenticationService {
  loginUrl = "http://green-web-ecommerce.herokuapp.com/v1/users/login";
  constructor(
    private http: HttpClient,
    private loginStatusService: LoginStatusService) { }

  login(username:string, password:string) {
    return this.http.post<any>(this.loginUrl, { email:username, password: password })
        .pipe(map((res:any) => {
          if(res && res.token) {
            localStorage.setItem('currentUser', JSON.stringify({ username , token: res.token }));
            console.log('setStatus authen')
          }
        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

} 
