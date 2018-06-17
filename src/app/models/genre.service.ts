import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Genre } from './genre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json' })
}

@Injectable({
  providedIn: 'root',
})
export class GenreService {


  genresUrl = "https://green-web-bookshop.herokuapp.com/api/genres";

  constructor ( private http : HttpClient ) {}

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(this.genresUrl);
  };

  getGenre(id:string): Observable<Genre> {
    const url = `${this.genresUrl}/${id}`
    return this.http.get<Genre>(url);
  };
  addGenre(genre:Genre): Observable<Genre> {
    return this.http.post<Genre>(this.genresUrl, genre, httpOptions)
  }
  deleteGenre( genre : Genre ): Observable<Genre> {
     //const id = typeof genre === "string" ? genre : genre._id;
    //const id:string;
    const url = `${this.genresUrl}/${genre._id}`;
    return this.http.delete<Genre>(url, httpOptions)
  }

  // updateGenre(genre:Genre): Observable<any> {
  //   // const url = `${this.genresUrl}/${genre._id}`;
  //   return this.http.put(this.genresUrl, genre, httpOptions )
  // }

  updateGenre(genre:Genre): Observable<Genre> {
    const url = `${this.genresUrl}/${genre._id}`;
    return this.http.put<Genre>(url, genre, httpOptions )
  }
  // getName(name:string): Observable<Genre> {
  //   const url = `${this.genresUrl}/${name}`;
  //   return this.http.get<Genre>(url)
  // };

}
