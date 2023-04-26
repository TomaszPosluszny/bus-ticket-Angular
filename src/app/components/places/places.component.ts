import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
})
export class PlacesComponent implements OnInit {

  public twoWayBinding = ''

  PlacesForm = new FormGroup({
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
    console.log(this.PlacesForm.value);
  }

  constructor() {}

  ngOnInit() {}

  get email() {
    return this.PlacesForm.controls['email'];
  }
  get password() {
    return this.PlacesForm.controls['password'];
  }
}
