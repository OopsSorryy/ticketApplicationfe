import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripComponent} from "./components/trip/trip.component";
import {BuyTicketComponent} from "./components/buy-ticket/buy-ticket.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginGuard} from "./guards/login.guard";
import {ProfileComponent} from "./components/profile/profile.component";


const routes: Routes = [
  {path:"", component:TripComponent},
  {path:"trips", component:TripComponent},
  {path:"buyTicket", component:BuyTicketComponent,canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
  {path:"trips/:tripId", component:TripComponent},
  {path:"trips/:fromCityId/:toCityId/:departureDate", component:TripComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
