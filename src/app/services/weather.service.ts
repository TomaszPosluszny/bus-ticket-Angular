import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationComponent } from '../pages/reservation/reservation.component';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 
  city:string = ''

  constructor(private http:HttpClient,  ) { }
  getCity() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ this.city +'&appid=f9fe3ecd6dcb482c2724f8261001d8e4');
  }
}
