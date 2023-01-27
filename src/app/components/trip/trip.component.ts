import {Component, OnInit} from '@angular/core';
import {TripResponse} from "../../models/tripResponse";
import {TripService} from "../../services/trip.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit{
  trips:TripResponse[] = [];

  selectedTrip:TripResponse;

  constructor(private tripService:TripService,
              private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
        if (params["fromCityId"] && params["toCityId"] && params["departureDate"]){
            this.searchTrips(params["fromCityId"] ,params["toCityId"],params["departureDate"]);
        }else{
          this.getAllTrips();
        }
      })
  }

  selectTrip(trip:TripResponse){
    this.selectedTrip=trip;
    console.log(this.selectedTrip)
  }

  getAllTrips(){
   this.tripService.getAllTrips().subscribe(params=>{
     this.trips=params;
   })
  }

  searchTrips(fromCityId:number,toCityId:number,departureDate:string){
    this.tripService.searchTrips(fromCityId,toCityId,departureDate)
      .subscribe(params=>{
      this.trips = params
    })
  }

}
