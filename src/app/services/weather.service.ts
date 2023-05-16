import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationComponent } from '../pages/reservation/reservation.component';

import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";

const API_KEY = "f9fe3ecd6dcb482c2724f8261001d8e4";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  nameCity:string = ''
  nameLondon:string = ''
  nameNewYork:string = ''
  nameWarsaw:string = ''
  getCities$: Observable<City[]> = this.http
    .get<City[]>("/assets/cities.json")
    .pipe(
      //TODO to remove, for quick debug only
      tap(r => console.log(r))
    );

  getWeather$ = (city: City): Observable<WeatherInfos> =>
    this.http
      .get<WeatherInfos>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${
          city.country
        }&units=metric&appid=${API_KEY}`
      )
      .pipe(
        //TODO to remove, for quick debug only
        tap(r => console.log(r))
      );

      getCity() {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameCity}&appid=f9fe3ecd6dcb482c2724f8261001d8e4`);
      }
      cityWarsaw() {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameWarsaw}&appid=f9fe3ecd6dcb482c2724f8261001d8e4`);
      }
      cityNewYork() {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameNewYork}&appid=f9fe3ecd6dcb482c2724f8261001d8e4`);
      }
      cityLondon() {
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.nameLondon}&appid=f9fe3ecd6dcb482c2724f8261001d8e4`);
      }
}

 
