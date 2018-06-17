import { Image } from './image';
// import { Comment } from './comment';
import { Size } from './size';
import { Genre } from './genre';

export class Book {
  _id: string;
  title: string;
  author: string;
  publisher: string;
  pages: number;
  weight: number;
  releaseDate: string;
  sku: string;
  shortDescription: string;
  fullDescription: string;
  previousPrice: number;
  sellingPrice: number;
  // comments: Comment;
  createDate: string;
  images: Image;
  size: Size;
  genre: Genre;

  constructor( 
  
   ) {
     this.title = "hihid";
     this.author = "";
     this.publisher = "";
     this.pages = 0;
     this.weight = 0;
     this.releaseDate = Date.now().toString();
     this.sku = "";
     this.shortDescription = "";
     this.fullDescription = "";
     this.previousPrice = 0;
     this.sellingPrice = 0;
     //this.comments = new Comment[];
     this.createDate = Date.now().toString();
     this.images = new Image("");
     this.images.main = "";
     this.size = new Size(0,0,0);
     this.genre = new Genre("");
   } 
   

}