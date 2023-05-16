import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

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
  ngOnInit() {
    this.getData().subscribe(data => {
      this.myData = data;
    });
  }
  getData() {
    return this.http.get('assets/login.json');
  }
  pokazNaEkranie: any;
  sample(){
    console.log(this.dataService.sharedData )
    this.pokazNaEkranie = this.dataService.sharedData
    }
    
}
