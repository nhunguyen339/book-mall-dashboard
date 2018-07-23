import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { switchMap, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Book } from '../../models/book';
import { BookService } from '../../models/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  books$ : Observable<Book[]>;
  queryString: string;
  private searchTerms = new Subject<string>();

  constructor(
    private bookService: BookService
  ) { }

  search(term: string):void {
    this.searchTerms.next(term);
    }
    ngOnInit(): void {
      this.books$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.bookService.searchBooks(term)),
      );
    }
}
