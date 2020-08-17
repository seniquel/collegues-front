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
  nopic = './assets/images/no-pic.jpg';

  constructor(private service: DataService, private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.appComponent.creationOn = !this.appComponent.creationOn;
  }

  validerCollegue(): void {
    console.log(this.col);
    this.service.sabonnerACollegueCourant().subscribe(
      v => this.col = v,
      err => console.log(err)
    );
    this.service.creerCollegue(this.col);
    this.service
      .creerCollegue(this.col)
      .subscribe(v => this.col = v);
  }

}
