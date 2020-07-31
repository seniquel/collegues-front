import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  service = new DataService();
  listeMat: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  rechercheCollegue(saisie: HTMLInputElement): void {
    const nom: string = saisie.value;
    this.listeMat = this.service.rechercherParNom(nom);
  }
}
