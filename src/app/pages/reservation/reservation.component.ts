import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor( private weatherService:WeatherService
    
  ) { }
dataTemp:any ={}
  ngOnInit(): void {this.weatherService.getCity().subscribe( (data:any) => {
    this.dataTemp = data
    console.log(this.dataTemp.main.temp)
    })
    }

  planeUrl: string =
  'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/f18518988e93d1928a12814495e700ed15493023/src/app/images/plane.jpg';
  description: string = ' This is plane';
  
}
