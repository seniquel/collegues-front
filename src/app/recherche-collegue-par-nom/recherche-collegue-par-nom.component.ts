import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  mat: any[] = matriculesMock;
  listeMat: string[] = [];
  myGroup = new FormGroup({
    nom: new FormControl()
 });

  constructor() { }

  ngOnInit(): void {
  }

  rechercheCollegue(): void{
    const nom = this.myGroup.value.nom;
    this.listeMat = this.mat.filter(o => o.nom === nom).map(o => o.matricule);
  }
}
