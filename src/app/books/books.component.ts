import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../models/genre.service';

import { Location } from '@angular/common'
import { BookService } from '../models/book.service';
import { Book } from '../models/book';
import { Size } from '../models/size';
import { Image } from '../models/image';
import { FormGroup, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  genres: Genre[] = [];
  genre: Genre;
  name: string;
  selectedGenre: Genre;
  selectedBook: Book;
  _id: string;
  title: string;
  images: Image;
  size: Size
  books: Book[] = [];

  formBookUpdate: FormGroup;
try : string;
  constructor(
    private location: Location,
    private bookService: BookService,
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this.getGenres();
    this.getBooks();
    this.try = "ngOninit"
    console.log(this.try)
    // this.selectedBook.title = "";
    // this.selectedBook.author = "";
    // this.selectedBook.publisher = "";
    // this.selectedBook.pages = 0;
    // this.selectedBook.weight = 0;
    // this.selectedBook.releaseDate = Date.now().toString();
    // this.selectedBook.shortDescription = "";
    // this.selectedBook.fullDescription = "";
    // this.selectedBook.sku = "";
    // this.selectedBook.previousPrice = 0;
    // this.selectedBook.sellingPrice = 0;
    // this.selectedBook.createDate = Date.now().toString();
    // this.images = new Image("");
    // this.selectedBook.images.main = "";
    // this.size = new Size(0,0,0);
    // this.selectedBook.size.depth = 0;
    // this.selectedBook.size.height = 0;
    // this.selectedBook.size.depth = 0;
    // this.genre = new Genre("");
    // this.selectedBook.genre = new Genre("")
    // this.selectedBook.genre.name = "";
    console.log("hihi");
    // ==========Form Group==========


  }

  // ==============Validation======


  // onSelectGenre(genre: Genre): void {
  //   this.selectedGenre = genre;
  // }

  onSelectBook(book: Book): void {
    // this.selectedBook = new Book();
    this.selectedBook = book;
    if (this.selectedBook.images.main == null) {
      this.selectedBook.images = new Image("");
    }
    if (this.selectedBook.size == null) {
      this.selectedBook.size = new Size(0, 0, 0);
    }
    // ================ khac so voi tao newBook tại vì để ở đây thì khi nó nhấn update thì mới có selectedBook để tạo chứ =================
    this.formBookUpdate = new FormGroup({
      "title": new FormControl(this.selectedBook.title, [
        Validators.required
      ]),
      "genre": new FormControl(this.selectedBook.genre, Validators.required),
      "author": new FormControl(this.selectedBook.author, Validators.required),
      "publisher": new FormControl(this.selectedBook.publisher, Validators.required),
      "image_main": new FormControl(this.selectedBook.images.main, Validators.required),
      "sellingPrice": new FormControl(this.selectedBook.sellingPrice, Validators.required),
      "previousPrice": new FormControl(this.selectedBook.previousPrice, Validators.required),

      // ================no required =======
      "pages": new FormControl(this.selectedBook.pages),
      "weight": new FormControl(this.selectedBook.weight),
      "shortDescription": new FormControl(this.selectedBook.shortDescription),
      "fullDescription": new FormControl(this.selectedBook.fullDescription),
      "sku": new FormControl(this.selectedBook.sku),
      "releaseDate": new FormControl(this.selectedBook.releaseDate),
      "createDate": new FormControl(this.selectedBook.createDate),
      "size_width": new FormControl(this.selectedBook.size.width),
      "size_height": new FormControl(this.selectedBook.size.height),
      "size_depth": new FormControl(this.selectedBook.size.depth)

    })
    console.log('select')

  }


  get getTitle() { return this.formBookUpdate.get("title") };
  get getGenre() { return this.formBookUpdate.get("genre") };
  get getImage() { return this.formBookUpdate.get("image_main") };
  get getAuthor() { return this.formBookUpdate.get("author") };
  get getPublisher() { return this.formBookUpdate.get("publisher") };
  get getSellingPrice() { return this.formBookUpdate.get("sellingPrice") };
  get getPreviousPrice() { return this.formBookUpdate.get("previousPrice") };


  onSubmit():void {
    this.selectedBook.title = this.formBookUpdate.value.title;
    this.selectedBook.author = this.formBookUpdate.value.author;
    this.selectedBook.publisher = this.formBookUpdate.value.publisher;
    this.selectedBook.genre._id = this.formBookUpdate.value.genre._id;
    this.selectedBook.genre.name = this.formBookUpdate.value.genre.name;
    this.selectedBook.images.main = this.formBookUpdate.value.image_main;
    this.selectedBook.sellingPrice = this.formBookUpdate.value.sellingPrice;
    this.selectedBook.previousPrice = this.formBookUpdate.value.previousPrice;
    this.selectedBook.pages = this.formBookUpdate.value.pages;
    this.selectedBook.weight = this.formBookUpdate.value.weight;
    this.selectedBook.shortDescription = this.formBookUpdate.value.shortDescription;
    this.selectedBook.fullDescription = this.formBookUpdate.value.fullDescription;
    this.selectedBook.sku = this.formBookUpdate.value.sku;
    this.selectedBook.releaseDate = this.formBookUpdate.value.releaseDate;
    this.selectedBook.createDate = this.formBookUpdate.value.createDate;
    this.selectedBook.size.width = this.formBookUpdate.value.size_width;
    this.selectedBook.size.depth = this.formBookUpdate.value.size_depth;
    this.selectedBook.size.height =this.formBookUpdate.value.size_height;
    this.save();
  }

  save(): void {
    this.bookService.updateBook(this.selectedBook).subscribe();
    console.log('save')
  }


  //  ============books===========

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }





  deleteBook(book: Book): void {
    this.books = this.books.filter(b => b !== book);
    this.bookService.deleteBook(book).subscribe(

    )
  }




  compareFn(optionOne: Genre, optionTwo: Genre): boolean {
    optionTwo 
    optionOne  
    return optionOne._id === optionTwo._id;
  }



  // // ============genres=========

  getGenres(): void {
    this.genreService.getGenres()
      .subscribe(genres => this.genres = genres)
  }
}


