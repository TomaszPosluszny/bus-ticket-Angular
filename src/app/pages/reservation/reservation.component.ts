import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  dataTemp: any = '';
  kalwinTemp: number = 273.15;
  miasto: string = 'Warszawa';

  ngOnInit(): void {
    this.weatherService.city = 'Londyn';

    this.weatherService.getCity().subscribe((data: any) => {
      this.dataTemp = data;
    });
  }

  planeUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/f18518988e93d1928a12814495e700ed15493023/src/app/images/plane.jpg';
  description: string = ' This is plane';

  nameCites() {
    return this.weatherService.city;
  }
  tempCites() {
    return Math.round(this.dataTemp.main?.temp - this.kalwinTemp);
  }
}
