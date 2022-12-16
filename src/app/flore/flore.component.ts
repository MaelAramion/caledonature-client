import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Flore} from "../flore";
import {FloreService} from "../flore.service";
import firebase from "firebase/compat";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-flore',
  templateUrl: './flore.component.html',
  styleUrls: ['./flore.component.scss']
})
export class FloreComponent implements OnInit {
  @Input() flore: Flore | null = null;
  @Output() edit = new EventEmitter<Flore>();

  user: firebase.User | null = null;

  constructor(private floreService: FloreService, private afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {
    this.afAuth.user.pipe(map(element => element)).subscribe(element => {
      this.user = element;
    });
  }

  ngOnInit(): void {
  }

  delete(id: string | undefined){
    this.floreService.delete(id);
    window.location.reload();
  }

}
