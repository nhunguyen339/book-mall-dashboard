import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';

const httpOption = {
  headers : new HttpHeaders({ 'Content-type' : 'application/json' })
}

@Injectable()
export class UserService {
  usersUrl = "http://green-web-ecommerce.herokuapp.com/v1/users";
  constructor( private http: HttpClient ) { }

  getAll() {
    return this.http.get<Users>(this.usersUrl);
  }

  // khi tạo thì chỉ tạo phần thân là User, còn khi get về thì api sẽ
  // tự động tạo thêm cái element khác trong Users

  createUser(user : User ): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOption ).pipe()
  }

 
}
