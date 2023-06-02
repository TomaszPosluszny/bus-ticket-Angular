import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './components/choice/choice.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { SummeryComponent } from './components/summery/summery.component';
import { PlaceComponent } from './pages/place/place.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { PlacesComponent } from './components/places/places.component';
import { HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SummationComponent } from './components/summation/summation.component';
import { NavplaceComponent } from './components/navplace/navplace.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ChoiceComponent,
    LoginComponent,
    NavComponent,
    SummeryComponent,
    PlaceComponent,
    ReservationComponent,
    PlacesComponent,
    SummationComponent,
    NavplaceComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule ],
  providers: [
    { provide: PathLocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
