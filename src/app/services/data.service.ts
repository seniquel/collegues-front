import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { matriculesMock } from '../mock/matricules.mock';
import { Collegue } from '../models/Collegue';
import { Note } from '../models/Note';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, pipe } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

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

  recherherParMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${this.URL_BACKEND}/collegues/${matricule}`);
  }

  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${this.URL_BACKEND}/collegues/${matricule}`);
  }

  creerCollegue(collegueCree: Collegue): Observable<Collegue> {
    return this.http.post<Collegue>(`${this.URL_BACKEND}/collegues`, collegueCree);
  }

  modifierCollegue(collegueModifie: Collegue): Observable<Collegue> {
    const data = {
      email: collegueModifie.email,
      photoUrl: collegueModifie.photoUrl
    };
    return this.http.patch<Collegue>(`${this.URL_BACKEND}/collegues/${collegueModifie.matricule}`, data);
  }

  recupererGalerie(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(`${this.URL_BACKEND}/collegues/photos`);
  }

  recupererNotes(matricule: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.URL_BACKEND}/collegues/${matricule}/notes`);
  }

  ajouterNote(matricule: string, message: string): Observable<Note> {
    return this.http.patch<Note>(`${this.URL_BACKEND}/collegues/${matricule}/notes`, message);
  }

  supprimerNote(matricule: string, id: number): Observable<boolean> {
    return this.http.patch<boolean>(`${this.URL_BACKEND}/collegues/${matricule}/notes/delete`, id);
  }

  // MOCKS
  rechercherMockParNom(nom: string): string[] {
    return matriculesMock.filter(o => o.nom === nom).map(o => o.matricule);
  }

  recupererCollegueMock(): Collegue {
    return collegueMock;
  }
}
