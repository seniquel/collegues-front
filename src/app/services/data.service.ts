import { Injectable } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { matriculesMock } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  URL_BACKEND = environment.backendUrl;
  subjectCollegueCourant = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  selectionner(collegueCourant: Collegue): void {
    this.subjectCollegueCourant.next(collegueCourant[0]);
  }

  sabonnerACollegueCourant(): Observable<Collegue> {
    return this.subjectCollegueCourant.asObservable();
  }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL_BACKEND}/collegues?nom=${nom}`);

  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${this.URL_BACKEND}/collegues/${matricule}`);

  }

  // MOCKS
  rechercherMockParNom(nom: string): string[]{
    return matriculesMock.filter(o => o.nom === nom).map(o => o.matricule);
  }

  recupererCollegueMock(): Collegue {
    return collegueMock;
  }
}
