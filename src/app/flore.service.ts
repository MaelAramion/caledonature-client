import { Injectable } from '@angular/core';
import {Flore} from "./flore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {elementAt, map, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FloreService {

  flores: Flore[] = [];

  constructor(private store: AngularFirestore) {
    this.flores = this.getFlores();
  }
  getFlores(){
    let f = this.store.collection<Flore>('flore').valueChanges({ idField: 'id' }) as Observable<Flore[]>;
    let flores: Flore[] = [];
    f.pipe(map(elements => elements)).subscribe(elements => {
      elements.forEach(flore =>{
        flores.push(flore);
      });
    });
    return flores;
  }

  getFloresObservable(){
    return this.store.collection<Flore>('flore').valueChanges({ idField: 'id' }) as Observable<Flore[]>;
  }

  getFlore(id: string){
    let f = this.store.collection<Flore>('flore').doc(id).get();
    return f;
  }

  add(flore: Flore){
    this.store.collection('flore').add(flore);
  }

  delete(id: string | undefined){
    this.store.collection('flore').doc(id).delete();
    this.flores.forEach((flore,key)=>{
      if(flore.id == id){
        this.flores.splice(key, 1);
      }
    });
  }
}
