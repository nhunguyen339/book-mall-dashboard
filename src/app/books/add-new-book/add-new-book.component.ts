import { Component, OnInit, Input } from '@angular/core';
import { Genre } from '../../models/genre';
import { Book } from '../../models/book';
import { Image } from '../../models/image';
import { Size } from '../../models/size';
import { BookService } from '../../models/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../forbidden-name/forbidden-name-directive';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent implements OnInit {
  @Input() genres: Genre[];
  @Input() books: Book[];

  newBook: Book;
  bookForm: FormGroup;
  group: any ={};

  selectedGenre: Genre;
  selectedBook: Book;


  images: Image;
  size: Size;
  genre: Genre;
  selectedGenre_id: string;
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit() {

    this.newBook = new Book();
    this.newBook.title = "";
    this.newBook.author = "";
    this.newBook.publisher = "";
    this.newBook.pages = 0;
    this.newBook.weight = 0;
    this.newBook.releaseDate = Date.now().toString();
    this.newBook.shortDescription = "";
    this.newBook.fullDescription = "";
    this.newBook.sku = "";
    this.newBook.previousPrice = 0;
    this.newBook.sellingPrice = 0;
    this.images = new Image("");
    this.newBook.images.main = "";
    this.size = new Size(0, 0, 0);
    this.newBook.size.depth = 0;
    this.newBook.size.height = 0;
    this.newBook.size.depth = 0;
    // this.genre = new Genre("");
    this.newBook.genre = new Genre("")
    // this.newBook.genre.name = "";
    console.log("hihi");

      // this.group.title = new FormControl(this.newBook.title, [
      //   Validators.required,
      //   Validators.maxLength(30),
      //   forbiddenNameValidator(/bob/i)

      // ]),
      // this.group.author = new FormControl(this.newBook.author, Validators.required),
      // this.group.publisher = new FormControl(this.newBook.publisher, Validators.required),
      // // "genre": new FormControl(this.newBook.genre._id, Validators.required),

      // this.group.image = new FormControl(this.newBook.images.main, Validators.required),
      // this.group.previousPrice = new FormControl(this.newBook.previousPrice, [
      //   Validators.required,
      //   Validators.min(-1)
      // ]),
      // this.group.sellingPrice = new FormControl(this.newBook.sellingPrice, Validators.required),
      // // ============not required : add FormControlName to reset form=====================
      // this.group.pages = new FormControl(this.newBook.pages),
      // this.group.weight = new FormControl(this.newBook.weight),
      // this.group.shortDescription = new FormControl(this.newBook.shortDescription),
      // this.group.fullDescription = new FormControl(this.newBook.fullDescription),
      // this.group.sku = new FormControl(this.newBook.sku),
      // this.group.releaseDate = new FormControl(this.newBook.releaseDate),
      // this.group.createDate = new FormControl(this.newBook.createDate),
      // this.group.width = new FormControl(this.newBook.size.width),
      // this.group.depth = new FormControl(this.newBook.size.depth),
      // this.group.height = new FormControl(this.newBook.size.height),
      // this.group.genre = new FormControl(this.newBook.genre, Validators.required)
      // this.bookForm = new FormGroup(this.group);


    this.bookForm = new FormGroup({
      "title": new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        forbiddenNameValidator(/bob/i)

      ]),
      "author": new FormControl('', Validators.required),
      "publisher": new FormControl('', Validators.required),
      // "genre": new FormControl(this.newBook.genre._id, Validators.required),

      "image_main": new FormControl('', Validators.required),
      "previousPrice": new FormControl('', [
        Validators.required,
        Validators.min(0)
      ]),
      "sellingPrice": new FormControl('', Validators.required),
      // ============not required : add FormControlName to reset form=====================
      "pages": new FormControl(''),
      "weight": new FormControl(''),
      "shortDescription": new FormControl(''),
      "fullDescription": new FormControl(''),
      "sku": new FormControl(''),
      "releaseDate": new FormControl(''),
      "createDate": new FormControl(''),
      "width": new FormControl(''),
      "depth": new FormControl(''),
      "height": new FormControl(''),
      "genre": new FormControl(''),
      // "genre_id": new FormControl(this.newBook.genre._id),
      // "genre_id" : this.bookForm.value.genre._id,
    })

  }
  // ===============Validation========
  get getTitle() { return this.bookForm.get("title") };
  get getAuthor() { return this.bookForm.get("author") };
  get getPublisher() { return this.bookForm.get("publisher") };
  get getGenre() {
    return this.bookForm.get("genre") };
  get getImage() { return this.bookForm.get("image_main") };
  get getPreviousPrice() { return this.bookForm.get("previousPrice") };
  get getSellingPrice() { return this.bookForm.get("sellingPrice") };
  // ==================================

  // onSelectGenre(genre):void {
  //   this.selectedGenre = genre;
  // }
  // genre_id
  // errorGenre():boolean {
  //   this.genre_id = this.bookForm.value.genre._id;
  //   if ( this.genre_id.invalid && (this.genre_id.dirty || this.genre_id.touched) ) {
  //     return true;
  //   }
  // }

  onSave(): void {
    // gan gia tri bookForm cho newBook
    this.newBook.title = this.bookForm.value.title;
    this.newBook.author = this.bookForm.value.author;
    this.newBook.publisher = this.bookForm.value.publisher;
    this.newBook.images.main = this.bookForm.value.image_main;
    this.newBook.previousPrice = this.bookForm.value.previousPrice;
    this.newBook.sellingPrice = this.bookForm.value.sellingPrice;
    this.newBook.pages = this.bookForm.value.pages;
    this.newBook.weight = this.bookForm.value.weight;
    this.newBook.shortDescription = this.bookForm.value.shortDescription;
    this.newBook.sku = this.bookForm.value.sku;
    this.newBook.createDate = this.bookForm.value.createDate;
    this.newBook.releaseDate = this.bookForm.value.releaseDate;
    this.newBook.size.depth = this.bookForm.value.depth;
    this.newBook.size.width = this.bookForm.value.width;
    this.newBook.size.height = this.bookForm.value.height;
    // have to choose genre (FormControl) because that genre is binding in formControlName
    this.newBook.genre._id = this.bookForm.value.genre._id;
    this.newBook.genre.name = this.bookForm.value.genre.name;
    this.add(); console.log("nhu");
  }

  add(): void {
    this.bookService.addBook(this.newBook)
      .subscribe()
  }

}
