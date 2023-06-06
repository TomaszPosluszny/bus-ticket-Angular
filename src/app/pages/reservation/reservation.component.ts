import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
})
export class ReservationComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  planeUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/assets/img/bus2.jpg';
  description: string = ' This is plane';
  ngOnInit(): void {}
}
