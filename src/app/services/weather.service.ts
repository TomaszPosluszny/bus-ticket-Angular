import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(private http:HttpClient) { }
  getCity() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Wrocław&appid=f9fe3ecd6dcb482c2724f8261001d8e4');
  }
}
