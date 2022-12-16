import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import { AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caledo\'nature';

  user: Observable<firebase.User | null>

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.user;
  }
}
