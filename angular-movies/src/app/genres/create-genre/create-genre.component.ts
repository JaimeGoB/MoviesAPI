import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
        validators: [Validators.required]
      }]
    });
  }

  saveChanges(){
    //Redirect back to genres route after saving a genre
    this.router.navigate(['/genres']);
  }

  getErrorMessageFieldName()
  {
    const field = this.form.get('name');

    if(field.hasError('required')){
      return 'The name field is requiered';
    }

    return '';
  }
}
