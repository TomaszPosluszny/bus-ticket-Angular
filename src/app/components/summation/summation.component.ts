import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-summation',
  templateUrl: './summation.component.html',
  styleUrls: ['./summation.component.scss'],
})
export class SummationComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private dataService: DataService
  ) {}

  dataTemp: any = '';
  warsawTemp: any = '';
  londonTemp: any = '';
  newyorkTemp: any = '';
  kalwinTemp: number = 273.15;



  user!: string;
  newUser!: string;
  newOrigin!: string;
  castOrigin!: string;
  newDeparture!: string;
  castDeparture!: string;
  newDate!: string;
  castDate!: string;
  newPassengerse!: string;
  castPassengerse!: string;
  newBag!: string;
  castBag!: string;

  visible: boolean = false;

  ticketOne: any = '';
  ticketTwo: any = '';
  ticketThree: any = '';
  bag: any = '';
  sum: number = 0;

  buyUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/app/components/images/buy.jpg';

  descriptionBuy: string = ' This is plane';

  ngOnInit(): void {
    this.dataService.castOrigin.subscribe(
      (newOrigin) => (this.newOrigin = newOrigin)
    );
    this.dataService.castDeparture.subscribe(
      (newDeparture) => (this.newDeparture = newDeparture)
    );
    this.dataService.castDate.subscribe((newDate) => (this.newDate = newDate));
    this.dataService.castPassengerse.subscribe(
      (newPassengerse) => (this.newPassengerse = newPassengerse)
    );
    this.dataService.castBag.subscribe((newBag) => (this.newBag = newBag));
    this.dataService.castPassengerse.subscribe(
      (newPassengerse) => (this.newPassengerse = newPassengerse)
    );
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

  
  calculateSum() {
    const value1 = parseFloat(this.ticketOne);
    const value2 = parseFloat(this.ticketTwo);
    const value3 = parseFloat(this.bag);
    if (value2 !== 210 && value2 !== 200 && value2 !== 240 && value2 !== 200 && value2 !== 400 && value2 !== 440) {
      this.sum = value1 + value3;
    } else {
      this.sum = value1 + value2 + value3;
    }
  }

  sendForm() {
    this.dataService.editBag(this.sum);
  }

  @ViewChild('myForm') myForm!: NgForm;

  onSubmit() {
    if (this.myForm.valid) {
      this.calculateSum();
      this.sendForm();
    }
  }

  onclick() {
    this.visible = !this.visible;
  }
}
