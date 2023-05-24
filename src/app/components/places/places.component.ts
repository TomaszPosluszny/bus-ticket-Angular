import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {
  constructor(private dataService: DataService) {}
  isHovered: any;

  freeOne: any;
  freeTwo: any;
  freeThree: any;
  freeFour: any;
  freeFive: any;

  visible: boolean = false;

  b3: number = 440;
  e2: number = 200;
  e9: number = 210;
  b14: number = 400;
  e14: number = 220;

  euro: number = 4.5;
  dollar: number = 4.18;

  exchange: any;

  newDeparture!: string;

  ngOnInit() {
    this.dataService.castDeparture.subscribe(
      (newDeparture) => (this.newDeparture = newDeparture)
    );
  }
}
