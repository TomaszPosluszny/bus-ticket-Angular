import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  cities: City[] = [];

  selectedCity!: City ;
  updatedCity!: City ;
  constructor(private weatherService: WeatherService) {}

  dataTemp: any = '';
  kalwinTemp: number = 273.15;
  nazwa: any = 'Warszawa';
  nazwa1: any = 'Wrocław';
  nazwa2: any = 'Wrocław';
  tom: any = 'Warszawa';

  city: string = 'Londyn';



  firstModel: string = '';

  readFirstName(): void {
    console.log(this.firstModel);
  }

  ngOnInit(): void {
    // this.weatherService.tomek = "Warszawa"
    // this.weatherService.getCity().subscribe((data: any) => {
    //   this.dataTemp = data;
    // });
    this.weatherService.getCities$.subscribe(res => this.cities.push(...res));
  }
  update() {
    if (this.selectedCity) {
      this.updatedCity = { ...this.selectedCity };
    }
  }
  planeUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/f18518988e93d1928a12814495e700ed15493023/src/app/images/plane.jpg';
  description: string = ' This is plane';

  // tempCites() {
  //   return Math.round(this.dataTemp.main?.temp - this.kalwinTemp);
  // }
}
