import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  listeMat: string[]
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.listeMat = [];
  }

  rechercheCollegue(saisie: HTMLInputElement): void {
    const nom: string = saisie.value;
    this.service.rechercherParNom(nom).subscribe(
      valeur => this.listeMat = valeur,
      err => console.log(err),
      () => { }
    );
  }

  select(matSelect: string): void {
    this.service.recupererCollegueCourant(matSelect).subscribe(
      collegue => this.service.selectionner(collegue),
      err => console.log(err),
      () => { }
    );
    // this.service.selectionner(collegue);
  }
}
