import { Component, OnInit, Input } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  @Input() mat: any[] = matriculesMock;
  listeMat: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  rechercheCollegue(saisie: HTMLInputElement): void{
    const nom: string = saisie.value;
    this.listeMat = this.mat.filter(o => o.nom === nom).map(o => o.matricule);
  }
}
