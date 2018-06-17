import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { of } from 'rxjs/observable/of';

import "rxjs/add/operator/map";
// import { Genre } from './genre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type' : 'application/json' })
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  booksUrl = "https://green-web-bookshop.herokuapp.com/api/books";

  constructor (
    private http: HttpClient,
  ) {
  }

  getBooks():Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }

  getBook(id:string): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url);
  }

  searchBooks(term:string):Observable<Book[]> {
    if (!term.trim()) {
      return of ([]);
    }
    return this.http.get<Book[]>(`${this.booksUrl}/?title=${term}`)
  }

//   public all(): Observable<Book[]> {
//     return this.cachingServiceBase.cache<Book[]>(() => this.books,
//                               (val: Observable<Book[]>) => this.books = val,
//                               () => this.http
//                                         .get(this.booksUrl)
//                                         .map((response) => response.json()
//                                                                     .map((item) => {
//                                                                       let model = new Book();
//                                                                       model.updateFrom(item);
//                                                                       return model;
//                                                                     } )));
//  }

addBook(book:Book): Observable<Book> {
  return this.http.post<Book>(this.booksUrl, book, httpOptions)
}
deleteBook( book : Book ): Observable<Book> {
  const url = `${this.booksUrl}/${book._id}`;
  return this.http.delete<Book>(url, httpOptions)
}

updateBook(book:Book): Observable<Book> {
  const url = `${this.booksUrl}/${book._id}`;
  return this.http.put<Book>(url, book, httpOptions )
}
// getName(name:string): Observable<Genre> {
//   const url = `${this.genresUrl}/${name}`;
//   return this.http.get<Genre>(url)
// };

}
