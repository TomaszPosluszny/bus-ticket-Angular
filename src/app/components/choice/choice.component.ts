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


@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  firstName: string = '';
  employment: boolean = false;
  hobbies: string = '';
  desc: string = '';

  addCustomer(formValue: NgForm) {
    console.log(formValue.value);
    console.log(formValue.valid);
  }

  origin: string = '';
  departure: string ='';
  passengers: string ='';
  date:string ='';
  name: string = '';
  cities: City[] = [];
  selectedCity!: City;
  updatedCity!: City;
  isHovered:any
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getCities$.subscribe((res) => this.cities.push(...res));
  }
  update() {
    if (this.selectedCity) {
      this.updatedCity = { ...this.selectedCity };
    }
  }
  // ngOnInit() {}
  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     console.log(form.value);
  //   }}

  
}
