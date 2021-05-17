import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void{
    this.moviesInTheaters = [{
      title: 'Spider-Man',
      releaseDate: new Date(),
      price: 1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Moana',
      releaseDate: new Date(),
      price: 300.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }];

    this.moviesFutureReleases = [];
  }
  //Declaring Arrays for Movies Lists
  moviesInTheaters;
  moviesFutureReleases;

  squareNumber(n: number){
    return n*n;
  }

  handleRating(rate: number){
    alert(`The user has select ${rate}`)
  }

}
