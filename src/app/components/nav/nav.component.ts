import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  today: any = new Date();
  dataTemp: any = '';
  kalwinTemp: number = 273.15;
  start: any = 'Wrocław';

  ngOnInit(): void {
    this.weatherService.nameCity = 'Wrocław';
    this.weatherService.getCity().subscribe((data: any) => {
      this.dataTemp = data;
      console.log(this.dataTemp);
    });
  }

  nameCites() {
    return this.start;
  }
  tempCites() {
    return Math.round(this.dataTemp.main?.temp - this.kalwinTemp);
  }
  changedDate: any = '';
  pipe = new DatePipe('en-US');
  changeFormat(today: any) {
    let ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');
    this.changedDate = ChangedFormat;
    console.log(this.changedDate);
  }

  logoUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/assets/img/buslogo1.png';

  descriptionLogo: string = ' This is plane';

  arrowUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/assets/img/arrow2.png';

  descriptionArrow: string = ' This is arrow';
  visible: boolean = false;

  onclick() {
    this.visible = !this.visible;
  }
}
