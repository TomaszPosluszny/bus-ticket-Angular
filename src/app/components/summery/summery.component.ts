import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { WeatherService } from 'src/app/services/weather.service';
import { City, WeatherInfos } from 'src/interfaces/interfaces_custom';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss']
})
export class SummeryComponent implements OnChanges, OnInit {

  @Input()
  city!: City ;

  weatherInfo!: WeatherInfos;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  ngOnChanges(simpleChange: SimpleChanges) {
    if (this.city) {
      this.weatherService
        .getWeather$(this.city)
        .subscribe(res => (this.weatherInfo = res));
    }
  }
}