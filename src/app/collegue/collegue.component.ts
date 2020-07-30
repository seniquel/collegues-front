import { Component, OnInit, Input } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue;
  editingOn = false;
  constructor() { }

  ngOnInit(): void {
  }

  creerCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }
  modifierCollegue(): void {
    console.log('Modification du collègue');
    this.editingOn = !this.editingOn;
  }

}
