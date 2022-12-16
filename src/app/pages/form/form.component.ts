import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map, Observable, switchMap} from "rxjs";
import {FloreService} from "../../flore.service";
import {Flore} from "../../flore";
import {ActivatedRoute, Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../../auth.service";
import firebase from "firebase/compat";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  flores: Flore[] | null = this.floreService.flores;

  flore: Flore | undefined = undefined;

  formtitle: string = "";

  form = new FormGroup({
    nom: new FormControl(''),
    description: new FormControl(''),
    illustration : new FormControl(''),
  });

  constructor(
    private store: AngularFirestore,
    private floreService: FloreService,
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {
    this.route.params.pipe(
      map(params => this.floreService.getFlore(params['id'])),
      switchMap(floreObservable => floreObservable.pipe(
        map(val => val.data())
      ))
    ).subscribe(val =>{
      this.flore = val;
    });

    if(this.router.url == "/ajouter"){
      this.formtitle = "Ajouter"
    }else{
      this.formtitle = "Modifier"
    }
    this.afAuth.user.pipe(map(element => element)).subscribe(element => {
      if(element == null){
        this.router.navigate(['/accueil'])
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.flore == null){
      let formValues = this.form.value;
      let flore: Flore = {
        nom: formValues.nom!,
        description: formValues.description!,
        illustration: formValues.illustration!,
      };
      this.floreService.add(flore);
      this.form.reset();
    }else{
      this.route.params.pipe(
        map(params => params['id'])).subscribe(params => {
          this.store.collection('flore').doc(params).update(this.form.value);
          this.router.navigate(['/flore']);
      });
    }

  }

}
