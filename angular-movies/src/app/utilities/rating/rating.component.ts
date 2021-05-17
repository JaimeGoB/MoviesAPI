import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  /* Parent component will be able to set the 
   * number of stars. 
  */
  @Input()
  maxRating = 5;
  @Input()
  selectedRate = 0;
  previousRate = 0;
  //Array that will hold elements indicated by maxRating
  maxRatingArr = [];
  //Declare event, to give info back to parent comp
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
    //Create array size of value of maxRating
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number)
  {
    /* Index of the star that was hovered over
    *  from html will be stored, this will be used
    *  to highlight current and previous stars. */
    this.selectedRate = index + 1;
  }

  handleMouseLeave()
  {
    /* Unhighlight current and previous stars
    *  when star is not hovered over. */
    if(this.previousRate !== 0 ){
      //Go back to previous clicked star
      this.selectedRate = this.previousRate;
    }else{
      //Unhighlight all stars
      this.selectedRate = 0;
    }
  }

  rate(index: number)
  {
    // Keep current and prev starts selected
    this.selectedRate = index + 1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate);
  }
}
