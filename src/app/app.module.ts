import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { SummeryComponent } from './components/summery/summery.component';
import { PlaceComponent } from './pages/place/place.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PlacesComponent } from './components/places/places.component';
import { HashLocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    SummeryComponent,
    PlaceComponent,
    ReservationComponent,
    PlacesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: PathLocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
