import {Component, OnInit} from '@angular/core';
import {TripResponse} from "../../models/tripResponse";
import {TripService} from "../../services/trip.service";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit{
  trips:TripResponse[] = [];

  constructor(private tripService:TripService) {
  }
  ngOnInit(): void {
    this.getAllTrips();
  }

  getAllTrips(){
   this.tripService.getAllTrips().subscribe(params=>{
     this.trips=params;
   })
  }

}
