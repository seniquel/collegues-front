import { Injectable } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { matriculesMock } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  rechercherParNom(nom: string): string[] {
    return matriculesMock.filter(o => o.nom === nom).map(o => o.matricule);

    }
  recupererCollegueCourant(): Collegue {
    return collegueMock;
    }
}
