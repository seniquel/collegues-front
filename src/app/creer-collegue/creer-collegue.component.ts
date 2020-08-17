import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})
export class CreerCollegueComponent implements OnInit {

  col: Collegue = {
    matricule: '',
    nom: '',
    prenoms: '',
    email: '',
    dateDeNaissance: null,
    photoUrl: ''
  };

  constructor(private service: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.appComponent.creationOn = !this.appComponent.creationOn;
  }

  validerCollegue(): void {
    this.service
      .creerCollegue(this.col)
      .subscribe(
        err => console.log(err));
    this.appComponent.creationOn = !this.appComponent.creationOn;
  }

}
