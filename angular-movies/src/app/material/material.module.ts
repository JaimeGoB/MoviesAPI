import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*this is added to be able to be able to use module in the project*/
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSelectModule} from '@angular/material/select'
import {MatCheckboxModule} from '@angular/material/checkbox'

@NgModule({
  declarations: [],
  /*Export Tool bar module to be able to use in the project*/
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
