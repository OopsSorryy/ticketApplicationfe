import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CityResponse} from "../models/cityResponse";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  url="http://localhost:8080/city";
  constructor(private httpClient: HttpClient) { }


  getAllCities(): Observable<CityResponse[]>{
    return this.httpClient.get<CityResponse[]>(this.url);
  }
}
