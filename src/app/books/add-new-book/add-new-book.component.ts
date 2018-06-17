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
  @Input() genres : Genre[];
  @Input() books: Book[];

  newBook : Book;
  bookForm : FormGroup;

  selectedGenre: Genre;
  selectedBook: Book;

  
  images: Image;
  size: Size;
  genre: Genre;

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
    this.newBook.createDate = Date.now().toString();
    this.images = new Image("");
    this.newBook.images.main = "";
    this.size = new Size(0,0,0);
    this.newBook.size.depth = 0;
    this.newBook.size.height = 0;
    this.newBook.size.depth = 0;
    this.genre = new Genre("");
    this.newBook.genre = new Genre("")
    this.newBook.genre.name = "";
    console.log("hihi");
    

    this.bookForm = new FormGroup({
      "title": new FormControl(this.newBook.title, [
        Validators.required,
        Validators.maxLength(30),
        forbiddenNameValidator(/bob/i)

      ]),
      "author": new FormControl(this.newBook.author, Validators.required),
      "publisher": new FormControl(this.newBook.publisher, Validators.required),
      "genre": new FormControl(this.newBook.genre._id, Validators.required),
      "image": new FormControl(this.newBook.images.main, Validators.required),
      "previousPrice": new FormControl(this.newBook.previousPrice, [
        Validators.required,
        Validators.min(-1)
      ]),
      "sellingPrice": new FormControl(this.newBook.sellingPrice, Validators.required),
      // ============not required : add FormControlName to reset form=====================
      "page" : new FormControl(this.newBook.pages),
      "weight": new FormControl(this.newBook.weight),
      "shortDescription": new FormControl(this.newBook.shortDescription),
      "fullDescription": new FormControl(this.newBook.fullDescription),
      "sku": new FormControl(this.newBook.sku),
      "releaseDate": new FormControl(this.newBook.releaseDate),
      "createDate": new FormControl(this.newBook.createDate),
      "width": new FormControl(this.newBook.size.width),
      "depth": new FormControl(this.newBook.size.depth),
      "height": new FormControl(this.newBook.size.height)
    })
    
  }
  // ===============Validation========
  get getTitle() { return this.bookForm.get("title") }; 
  get getAuthor() { return this.bookForm.get("author")};
  get getPublisher() {return this.bookForm.get("publisher")};
  get getGenre() {return this.bookForm.get("genre")};
  get getImage(){ return this.bookForm.get("image") };
  get getPreviousPrice() { return this.bookForm.get("previousPrice") };
  get getSellingPrice() { return this.bookForm.get("sellingPrice") }
// ==================================




  onSelectGenre(genre:Genre):void {
    this.newBook.genre = genre;
  }

  onSelectBook(book :Book):void {
    this.selectedBook = book;
  }



  add(): void {
    if ( this.newBook.title.length > 0 ) {
      // let size = new Size(
      //   this.width,
      //   this.height,
      //   this.weight
      // )
      // this.size = size;
        
      // let images = new Image (
      //   this.main
      // );
      // this.images = images;


      // let selectedGenre = new Genre(
      //   this.name,
      //   this._id
      // )
      // this.selectedGenre = selectedGenre;
      

      
      this.bookService.addBook(this.newBook)
        .subscribe( book =>
        {
        this.books.push(book)
      }
      )
    }
  }

 save():void {
   this.bookService.updateBook(this.selectedBook).subscribe();
 }


 goBack() {
  // return this.location.back();
}





}
