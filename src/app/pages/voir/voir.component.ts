import { Component, OnInit } from '@angular/core';
import {map, switchMap} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {FloreService} from "../../flore.service";
import {ActivatedRoute} from "@angular/router";
import {Flore} from "../../flore";

@Component({
  selector: 'app-voir',
  templateUrl: './voir.component.html',
  styleUrls: ['./voir.component.scss']
})
export class VoirComponent implements OnInit {

  flore: Flore | undefined = undefined;

  constructor(private store: AngularFirestore, private floreService: FloreService, private route: ActivatedRoute) {
    this.route.params.pipe(
      map(params => this.floreService.getFlore(params['id'])),
      switchMap(floreObservable => floreObservable.pipe(
        map(val => val.data())
      ))
    ).subscribe(val =>{
      this.flore = val;
    });
  }

  ngOnInit(): void {
  }

}
