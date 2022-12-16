import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FormComponent} from "./pages/form/form.component";
import {FloreListComponent} from "./pages/flore-list/flore-list.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {VoirComponent} from "./pages/voir/voir.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: HomeComponent},
  {path: 'ajouter', component: FormComponent},
  {path: 'flores', component: FloreListComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'flore/update/:id', component: FormComponent},
  {path: 'flore/voir/:id', component: VoirComponent},
  {path: 'connexion', component: ConnexionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
