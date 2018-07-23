
import { Component, OnInit } from '@angular/core';
import { Genre } from '../models/genre';
import { GenreService } from '../models/genre.service';

// import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {

  // ==========genre=============
  genres : Genre[] =[];
  genre : Genre;
  name:string;
  selectedGenre : Genre;

  _id:string;



  constructor(
    private genreService : GenreService,
    // private location : Location,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getGenres();
  }


  // ============genres=========

  getGenres():void {
    this.genreService.getGenres()
      .subscribe( genres => this.genres = genres )
  }
  getGenre():void {
    let id: string;
    id = this.route.snapshot.paramMap.get('_id');
    this.genreService.getGenre(id)
      .subscribe( genre => this.genre =genre );
  }

  add(): void {
    if ( this.name.length > 0 ) {
      let newGenre = new Genre(this.name);
      this.genreService.addGenre(newGenre)
        .subscribe( genre =>
        {
        this.name ="";
        this.genres.push(genre)}
      )
    }
  }
  // addDisable():boolean {
  //   return this.newGenre.name.length == 0;
  // }
  delete(genre: Genre):void {
    this.genres = this.genres.filter( g => g !== genre );
    this.genreService.deleteGenre(genre).subscribe(
    
    );
  }
  onSelect(genre):void {
    this.selectedGenre = genre;
  }

 save():void {
   this.genreService.updateGenre(this.selectedGenre)
    .subscribe( _ => this.genre = _
    )
 }



}


