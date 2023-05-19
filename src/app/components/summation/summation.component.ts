import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.component.html',
  styleUrls: ['./summation.component.scss']
})
export class SummationComponent implements OnInit {

  constructor(private weatherService: WeatherService, private dataService: DataService) { }

  dataTemp: any = '';
  warsawTemp:any=''
  londonTemp:any=''
  newyorkTemp:any=''
  kalwinTemp: number = 273.15;
  myValue:any
  name = 'Angular';
  user!: string;
  newUser!: string;
  newOrigin!:string;
  castOrigin!:string;
  newDeparture!:string;
  castDeparture!:string;
  newDate!:string;
  castDate!:string;
  newPassengerse!:string;
  castPassengerse!:string;
  tempCites() {
    return Math.round(this.dataTemp.main?.temp - this.kalwinTemp);
  }
  cityWarsaw() {
    return Math.round(this.warsawTemp.main?.temp - this.kalwinTemp);
  }
  cityLondon() {
    return Math.round(this.londonTemp.main?.temp - this.kalwinTemp);
  }
  cityNewYork() {
    return Math.round(this.newyorkTemp.main?.temp - this.kalwinTemp);
  }
  
  ngOnInit(): void {
    
    this.dataService. castOrigin.subscribe(newOrigin => (this. newOrigin = newOrigin));
    this.dataService. castDeparture.subscribe(newDeparture => (this. newDeparture= newDeparture));
    this.dataService. castDate.subscribe(newDate => (this. newDate= newDate));
    this.dataService. castPassengerse.subscribe(newPassengerse => (this. newPassengerse= newPassengerse));
    this.weatherService.nameCity = 'Wrocław';
    this.weatherService.getCity().subscribe((data: any) => {
      this.dataTemp = data;
     
    });
    this.weatherService.nameWarsaw = 'Warszawa';
    this.weatherService.cityWarsaw().subscribe((data: any) => {
      this.warsawTemp = data;
      
     
    });
    this.weatherService.nameLondon = 'London';
    this.weatherService.cityLondon().subscribe((data: any) => {
      this.londonTemp = data;
      
     
    });
    this.weatherService.nameNewYork = 'New York';
    this.weatherService.cityNewYork().subscribe((data: any) => {
      this.newyorkTemp = data;
      
     
    });
  }



}
