import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logoUrl: string =
  'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/master/src/app/components/images/logo.png';
  description: string = ' This is plane';
}
