import { Component, OnInit } from '@angular/core';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  get data():string {
    return this.dataService.sharedData;
    }
    
    set data(value: string){
    this.dataService.sharedData = value;
    }
    
    constructor(private dataService: DataService) { }
    
    ngOnInit() {
    // this.dataService.sharedData = '15'
    }
  updatedCity!: City;
  isHovered:any
  myValue: string= ''
  saveValue() {
    this.dataService.myValue = this.myValue;
  }
}
