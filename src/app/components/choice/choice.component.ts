import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss'],
})
export class ChoiceComponent implements OnInit {
  ChoiceForm = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(8),
      ],
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(6)],
    }),
  });

  zatwierdz() {
    console.log(this.ChoiceForm.value);
  }

  constructor() {}

  ngOnInit() {}

  get email() {
    return this.ChoiceForm.controls['email'];
  }
  get password() {
    return this.ChoiceForm.controls['password'];
  }
}
