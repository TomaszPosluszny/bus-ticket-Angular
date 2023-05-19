import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import { NgForm, ValidatorFn } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  origin: string = '';
  origin1: string = '';
  departure: string = '';
  passengers: string = '';
  date: string = '';
  name: string = '';
  cities: City[] = [];
  selectedCity!: City;
  updatedCity!: City;
  isHovered: any;
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

  visible: boolean = false;

  onclick() {
    this.visible = !this.visible;
  }
}
