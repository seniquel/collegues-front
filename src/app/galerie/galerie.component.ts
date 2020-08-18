import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  listeGalerie: Collegue[];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.recupererGalerie().subscribe(
      valeur => this.listeGalerie = valeur,
      err => console.log(err),
      () => { }
    );
  }
}
