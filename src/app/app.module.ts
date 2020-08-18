import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { AproposComponent } from './apropos/apropos.component';
import { GalerieComponent } from './galerie/galerie.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';

const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'galerie', component: GalerieComponent},
  { path: 'apropos', component: AproposComponent},
  { path: '', pathMatch: 'full', redirectTo: '/accueil' },
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    UrlValidatorDirective,
    MenuComponent,
    GalerieComponent,
    AproposComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
