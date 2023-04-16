import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceComponent } from './pages/place/place.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

const routes: Routes = [
  { path: 'place', component: PlaceComponent },
  { path: '', component: ReservationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
