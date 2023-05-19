import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient, private dataService: DataService) {}
  login: string = '';
  myData: any;
  sendForm() {
    this.dataService.editLogin(this.login);
  
  }

  ngOnInit() {
    this.getData().subscribe((data) => {
      this.myData = data;
    });
  }

  getData() {
    return this.http.get('assets/login.json');
  }
}
