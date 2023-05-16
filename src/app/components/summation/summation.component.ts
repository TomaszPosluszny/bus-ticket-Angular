import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.component.html',
  styleUrls: ['./summation.component.scss']
})
export class SummationComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  dataTemp: any = '';
  warsawTemp:any=''
  kalwinTemp: number = 273.15;
  myValue:any
  tempCites() {
    return Math.round(this.dataTemp.main?.temp - this.kalwinTemp);
  }
  cityWarsaw() {
    return Math.round(this.warsawTemp.main?.temp - this.kalwinTemp);
  }

  ngOnInit(): void {
    this.weatherService.nameCity = 'Wrocław';
    this.weatherService.getCity().subscribe((data: any) => {
      this.dataTemp = data;
      console.log(this.dataTemp);
    });
    this.weatherService.nameWarsaw = 'Warszawa';
    this.weatherService.cityWarsaw().subscribe((data: any) => {
      this.warsawTemp = data;
      console.log(this.dataTemp);
    });
  }

}
