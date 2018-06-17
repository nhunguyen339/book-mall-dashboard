import { Injectable } from '@angular/core';
import { Banner } from './banner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  bannersUrl = "https://green-web-bookshop.herokuapp.com/api/banners";
  constructor(
    private http: HttpClient
  ) {}

  getBanners():Observable<Banner[]> {
    return this.http.get<Banner[]>(this.bannersUrl);
  }
}