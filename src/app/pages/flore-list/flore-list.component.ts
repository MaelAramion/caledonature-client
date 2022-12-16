import { Component, OnInit } from '@angular/core';
import {Flore} from "../../flore";
import {FloreService} from "../../flore.service";

@Component({
  selector: 'app-flore-list',
  templateUrl: './flore-list.component.html',
  styleUrls: ['./flore-list.component.scss']
})
export class FloreListComponent implements OnInit {

  flores: Flore[] = this.floreService.getFlores();

  constructor(private floreService: FloreService) { }

  ngOnInit(): void {
  }

}
