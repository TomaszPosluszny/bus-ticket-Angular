import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public sharedData: string=''

 public myValue: string =''
  constructor() { }

 public getMyValue() {
    return this.myValue;
  }
}
