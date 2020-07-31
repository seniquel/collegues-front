import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  col: Collegue;
  editingOn = false;
  constructor(private service: DataService) { }


  ngOnInit(): void {
    this.col = this.service.recupererCollegueMock();
    this.service.sabonnerACollegueCourant().subscribe(
      v => { this.col = v; console.log(v); },
      err => console.log(err)
    );
  }

  creerCollegue(): void {
    console.log('Création d\'un nouveau collègue');
  }
  modifierCollegue(): void {
    console.log('Modification du collègue');
    this.editingOn = !this.editingOn;
  }

}
