import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    },2000) //Time to wait to execute function
  }
  title = 'any value';

  movies;

  squareNumber(n: number){
    return n*n;
  }
}
