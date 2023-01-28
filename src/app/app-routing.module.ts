import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripComponent} from "./components/trip/trip.component";
import {BuyTicketComponent} from "./components/buy-ticket/buy-ticket.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginGuard} from "./guards/login.guard";
import {ProfileComponent} from "./components/profile/profile.component";
import {BuyTicketDetailComponent} from "./components/buy-ticket-detail/buy-ticket-detail.component";


const routes: Routes = [
  {path:"", component:TripComponent},
  {path:"trips", component:TripComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile/:customerId", component:ProfileComponent},
  {path:"profile/:customerId/:buyTicketId", component:BuyTicketDetailComponent},
  {path:"trips/:tripId/buyTicket", component:BuyTicketComponent},
  {path:"trips/:fromCityId/:toCityId/:departureDate", component:TripComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
