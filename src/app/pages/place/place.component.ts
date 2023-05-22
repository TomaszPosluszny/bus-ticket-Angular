import { Component, OnInit } from '@angular/core';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-place',

  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss'],
})
export class PlaceComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}
  description: string = ' This is man';
  choiceUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/app/components/images/choice.jpg';
}
