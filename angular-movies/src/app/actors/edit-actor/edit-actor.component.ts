import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { addListener } from 'process';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  model: actorDTO = {
    name: 'Tom Holland',
    dateOfBirth: new Date(),
    picture: '',
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //alert(params.id)
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
  }
}
