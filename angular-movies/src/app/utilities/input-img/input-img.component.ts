import { Component, OnInit } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent implements OnInit {

  imageBase64: string;

  constructor() { }

  ngOnInit(): void {
  }

  change(event)
  {
    if(event.target.files.length > 0 ){
      const file: File = event.target.files[0];
      toBase64(file).then((value: string) => this.imageBase64 = value);
      
    }
  }
}
