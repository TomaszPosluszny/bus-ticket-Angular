import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: DataService, private router: Router) {}
  login: string = '';
  myData: any;

  visible: boolean = false;

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.myData = data;
    });
  }

  sendForm() {
    this.dataService.editLogin(this.login);
  }

  getData() {
    return this.http.get('assets/login.json');
  }
  onclick() {
    this.visible = !this.visible;
  }
  @ViewChild('myForm') myForm!: NgForm;
  onSubmit() {
    if (this.myForm.valid) {
      this.router.navigate(['/place']);
    }
  }
}
