import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  form: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //The form will display an empty string in name
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required,
                     Validators.minLength(3),
                     firstLetterUppercase()]
      }]
    });
  }

  saveChanges(){
    //Redirect back to genres route after saving a genre
    this.router.navigate(['/genres']);
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
