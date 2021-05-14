import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*this is added to be able to be able to use module in the project*/
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [],
  /*Export Tool bar module to be able to use in the project*/
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
