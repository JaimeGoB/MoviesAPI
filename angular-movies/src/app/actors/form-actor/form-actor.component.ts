import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {

  form: FormGroup;
  
  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: ''
    });
  }

  saveChanges()
  {
    this.onSaveChanges.emit(this.form.value);
  }

}
