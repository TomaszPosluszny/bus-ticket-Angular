import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  errorUrl: string =
    'https://blog.hubspot.com/hs-fs/hubfs/404-error-page-iconfinder.jpg?width=975&name=404-error-page-iconfinder.jpg';
  description: string = 'This is error';
}
