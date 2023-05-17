import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private dataService:DataService) { }
  origin:string = ''
  myData: any;
  myValue:any
  formData: any = {};
  
 
  getData() {
    return this.http.get('assets/login.json');
  }
  pokazNaEkranie: any;
  sample(){
    console.log(this.dataService.sharedData )
    this.pokazNaEkranie = this.dataService.sharedData
    }
    onSubmit(form: NgForm) {
      if (form.valid) {
        this.dataService.saveData(this.formData);
      }
    }

     name = 'Angular';
  newUser: string=""
  ngOnInit() {}

  editedUser() {
    this.dataService.editUser(this.newUser);
  }
}
