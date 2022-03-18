import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../movie-theater.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css'],
})
export class MovieTheaterFormComponent implements OnInit {
  @Output() onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });
  }

  ngOnInit(): void {}

  saveChanges() {
    // Save values from form into dto and send to parent component
    this.onSaveChanges.emit(this.form.value);
  }
}
