import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { City } from 'src/interfaces/interfaces_custom';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  origin: string = '';
  departure: string = '';
  passengers: string = '';
  date: string = '';

  cities: City[] = [];
  selectedCity!: City;
  updatedCity!: City;

  isHovered: any;

  visible: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.weatherService.getCities$.subscribe((res) => this.cities.push(...res));
  }
  update() {
    if (this.selectedCity) {
      this.updatedCity = { ...this.selectedCity };
    }
  }
  sendForm() {
    this.dataService.editOrigin(this.origin);
    this.dataService.editDeparture(this.departure);
    this.dataService.editDate(this.date);
    this.dataService.editPassengerse(this.passengers);
  }

  onclick() {
    this.visible = !this.visible;
  }
  @ViewChild('myForm') myForm!: NgForm;
  onSubmit() {
    if (this.myForm.valid) {
      this.onclick();
    }
  }
  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1;
    let day: string | number = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  }
}
