import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  private formData: any = {};

  saveData(formData: any) {
    this.formData = formData;
  }
    
  getData() {
    return this.formData;
  }
  private user = new BehaviorSubject<string>('');
  castUser = this.user.asObservable();

  editUser(newUser:any) {
    this.user.next(newUser);
  }

  private newOrigin = new BehaviorSubject<string>('');
  castOrigin = this.newOrigin.asObservable();

  editOrigin(origin:any) {
    this.newOrigin.next(origin);
  }
  private newDeparture = new BehaviorSubject<string>('');
  castDeparture = this.newDeparture.asObservable();

  editDeparture(departure:any) {
    this.newDeparture.next(departure);
  }
  private newDate = new BehaviorSubject<string>('');
  castDate = this.newDate.asObservable();

  editDate(date:any) {
    this.newDate.next(date);
  }
  private newPassengerse = new BehaviorSubject<string>('');
  castPassengerse = this.newPassengerse.asObservable();

  editPassengerse(passengerse:any) {
    this.newPassengerse.next(passengerse);
  }
  private newLogin = new BehaviorSubject<string>('');
  castLogin = this.newLogin.asObservable();

  editLogin(login:any) {
    this.newLogin.next(login);
  }
}
