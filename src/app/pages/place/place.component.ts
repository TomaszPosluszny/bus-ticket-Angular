import { Component, OnInit } from '@angular/core';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  updatedCity!: City;
  isHovered:any
}
