import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  service = new DataService();
  col = this.service.recupererCollegueCourant();
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
