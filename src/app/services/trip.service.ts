import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TripResponse} from "../models/tripResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  url = "http://localhost:8080/"
  constructor(private httpClient: HttpClient) {
  }

  getAllTrips():Observable<TripResponse[]>{
    let newPath = this.url + "trip"
    return this.httpClient.get<TripResponse[]>(newPath);
  }

  searchTrips(fromCityId:number,toCityId:number,departureDate:string):Observable<TripResponse[]>{
    let newPath = this.url + "trip/"+ fromCityId + "/" + toCityId + "/" + departureDate
    return this.httpClient.get<TripResponse[]>(newPath);
  }
}
