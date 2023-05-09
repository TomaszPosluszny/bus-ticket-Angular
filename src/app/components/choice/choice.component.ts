import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

import {NgForm, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  firstName:string = '';
  employment:boolean = false; 
  hobbies:string = '';
  desc:string = '';

  addCustomer(formValue:NgForm){
    console.log(formValue.value)
    console.log(formValue.valid)
  }








  constructor() {}
  origin:string=""
  name:string=""
 
  ngOnInit() {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }}

    
}
