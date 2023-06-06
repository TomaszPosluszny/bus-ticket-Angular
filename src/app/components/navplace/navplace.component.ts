import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navplace',
  templateUrl: './navplace.component.html',
  styleUrls: ['./navplace.component.scss'],
})
export class NavplaceComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private dataService: DataService
  ) {}

  today: any = new Date();
  dataTemp: any = '';
  kalwinTemp: number = 273.15;
  start: any = 'Wrocław';

  newLogin!: string;
  castLogin!: string;

  ngOnInit(): void {
    this.weatherService.nameCity = 'Wrocław';
    this.weatherService.getCity().subscribe((data: any) => {
      this.dataTemp = data;
      console.log(this.dataTemp);
    });
    this.dataService.castLogin.subscribe(
      (newLogin) => (this.newLogin = newLogin)
    );
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
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/assets/img/buslogo.png';

  descriptionLogo: string = ' This is plane';

  arrowUrl: string =
    'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/assets/img/arrow2.png';

  descriptionArrow: string = ' This is arrow';
  visible: boolean = false;

  onclick() {
    this.visible = !this.visible;
  }
}
