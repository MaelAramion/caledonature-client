import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandComponent } from './brand/brand.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormComponent } from './pages/form/form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { FloreComponent } from './flore/flore.component';
import {MatCardModule} from "@angular/material/card";
import { FloreListComponent } from './pages/flore-list/flore-list.component';
import { FIREBASE_OPTIONS} from "@angular/fire/compat";
import { ContactComponent } from './pages/contact/contact.component';
import { VoirComponent } from './pages/voir/voir.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { ConnexionComponent } from './pages/connexion/connexion.component';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BrandComponent,
    FormComponent,
    FloreComponent,
    FloreListComponent,
    ContactComponent,
    VoirComponent,
    ConnexionComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatCardModule,
        MatProgressBarModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule
    ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
