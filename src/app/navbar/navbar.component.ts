import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import firebase from "firebase/compat";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {user} from "@angular/fire/auth";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  user: firebase.User | null = null;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.afAuth.user.pipe(map(element => element)).subscribe(element => {
      this.user = element;
      console.log(this.user);
    });

  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/accueil']);
  }

}
