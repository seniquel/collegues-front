import { AccueilComponent } from './../accueil/accueil.component';
import { AppComponent } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  col: Collegue = {
    matricule: '',
    nom: '',
    prenoms: '',
    email: '',
    dateDeNaissance: null,
    photoUrl: './assets/images/no-pic.jpg'
  };
  editingOn = false;
  constructor(private service: DataService, private accueil: AccueilComponent) { }


  ngOnInit(): void {
    // this.col = this.service.recupererCollegueMock();
    this.service.sabonnerACollegueCourant().subscribe(
      v => {
        this.col = v;
      },
      err => console.log(err)
    );
  }

  creerCollegue(): void {
    console.log('Création d\'un nouveau collègue');
    this.accueil.creationOn = !this.accueil.creationOn;
  }

  modifierCollegue(): void {
    console.log('Modification du collègue');
    this.editingOn = !this.editingOn;
  }

  validerModifCollegue(): void {
    this.editingOn = !this.editingOn;
    this.service
      .modifierCollegue(this.col)
      .subscribe(
        err => console.log(err));
  }

}
