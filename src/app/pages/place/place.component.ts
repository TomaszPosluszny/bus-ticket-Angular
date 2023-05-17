import { Component, OnInit } from '@angular/core';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-place',
  
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  
    
    constructor(private dataService: DataService) { }
    
    
  updatedCity!: City;
  isHovered:any
  

  name = 'Angular';
  user!: string;
  newUser!: string;
  newOrigin!:string;
  castOrigin!:string;
  newDeparture!:string;
  castDeparture!:string;
  newDate!:string;
  castDate!:string;
  newPassengerse!:string;
  castPassengerse!:string;

  ngOnInit() {
    this.dataService.castUser.subscribe(user => (this.user = user));
    this.dataService. castOrigin.subscribe(newOrigin => (this. newOrigin = newOrigin));
    this.dataService. castDeparture.subscribe(newDeparture => (this. newDeparture= newDeparture));
    this.dataService. castDate.subscribe(newDate => (this. newDate= newDate));
    this.dataService. castPassengerse.subscribe(newPassengerse => (this. newPassengerse= newPassengerse));
  }

 

}
