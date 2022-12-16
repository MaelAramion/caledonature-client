import { Component, OnInit } from '@angular/core';
import {Flore} from "../../flore";
import {FloreService} from "../../flore.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flores: Flore[] = this.floreService.getFlores();

  flore: Flore | undefined = undefined;

  progress_value: number = 0;

  constructor(private floreService: FloreService) {
    this.floreService.getFloresObservable().pipe(elements => elements).subscribe(elements => {
      elements.forEach((element)=>{
        this.flores.push(element);
        this.flore = this.flores[this.getRandomInt(this.flores.length)];
      });
    });

    setInterval(()=>{
      this.flore = this.flores[this.getRandomInt(this.flores.length)];
    },5000);
    setInterval(()=>{
      if(this.progress_value == 100){
        this.progress_value = 0;
      }else{
        this.progress_value += 100/5;
      }
    }, 1000);
  }

  ngOnInit(): void {
  }

  getRandomInt(max: number){
    return Math.floor(Math.random() * max);
  }

}
