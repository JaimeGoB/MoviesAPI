import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  @Input()
  model: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //The form will display an empty string in name
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required,
                     Validators.minLength(3),
                     firstLetterUppercase()]
      }]
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  /*Function will make sure Validators are meet
   *for Name: */
  getErrorMessageFieldName()
  {
    const field = this.form.get('name');

    //Field Empty Validation
    if(field.hasError('required')){
      return 'The name field is requiered';
    }

    //Minimum Length Validator
    if(field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    //First Letter Upper Case Validator
    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
