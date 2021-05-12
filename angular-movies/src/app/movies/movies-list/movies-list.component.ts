import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Simulating a DB request
    setTimeout(() => {
      this.movies = [{
        title: 'Spider-Man',
        releaseDate: new Date(),
        price: 1400.99
      },
      {
        title: 'Moana',
        releaseDate: new Date(),
        price: 300.99
      }];
    },0) //Time to wait to execute function
  }
  title = 'any value';

  movies;

}
