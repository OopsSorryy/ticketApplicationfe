import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TripResponse} from "../models/tripResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  url = "http://localhost:8080/trip"
  constructor(private httpClient: HttpClient) {
  }

  getAllTrips():Observable<TripResponse[]>{
    return this.httpClient.get<TripResponse[]>(this.url);
  }
}
