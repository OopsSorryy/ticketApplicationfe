import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerResponse} from "../models/customerResponse";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  url= "http://localhost:8080/"
  constructor(private httpClient: HttpClient) { }

  getCustomerById(customerId:number):Observable<CustomerResponse>{
    let newPath = this.url + "customer/" + customerId
    return this.httpClient.get<CustomerResponse>(newPath);
  }
}
