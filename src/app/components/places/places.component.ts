import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  constructor( private dataService: DataService) {}
  isHovered: any;
  freeOne:any
  freeTwo:any
  freeThree:any
  freeFour:any
  freeFive:any
  visible: boolean = false;
  ticketBuisnesPl:number = 200 
  ticketBuisnesEUR:number = 45 
  ticketBuisnesUSD:number = 48 
  exchange:any
  newDeparture!:string;

  ngOnInit() {
    this.dataService. castDeparture.subscribe(newDeparture => (this. newDeparture= newDeparture));
  }
}
