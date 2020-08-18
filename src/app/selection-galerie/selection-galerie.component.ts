import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-selection-galerie',
  templateUrl: './selection-galerie.component.html',
  styleUrls: ['./selection-galerie.component.css']
})
export class SelectionGalerieComponent implements OnInit {

  col: Collegue = {
    matricule: '',
    nom: '',
    prenoms: '',
    email: '',
    dateDeNaissance: null,
    photoUrl: ''
  };

  constructor(private service: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.service.recherherParMatricule(params.get('matricule')).subscribe(
          value => this.col = value[0],
          err => console.log(err),
          () => { }
        );
      }
    );
  }

}
