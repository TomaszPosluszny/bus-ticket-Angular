import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  planeUrl: string =
  'https://raw.githubusercontent.com/TomaszPosluszny/airline-ticket-reservation-Angular/f18518988e93d1928a12814495e700ed15493023/src/app/images/plane.jpg';
  description: string = ' This is plane';
}
