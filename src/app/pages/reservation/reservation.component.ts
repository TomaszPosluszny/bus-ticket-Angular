import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  
  constructor(private weatherService: WeatherService) {}
  
  ngOnInit(): void {
  //   this.weatherService.getCities$.subscribe((res) => this.cities.push(...res));
  // }
  // update() {
  //   if (this.selectedCity) {
  //     this.updatedCity = { ...this.selectedCity };
  //   }
  }
  
  planeUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/f18518988e93d1928a12814495e700ed15493023/src/app/images/plane.jpg';
  description: string = ' This is plane';
  
}
