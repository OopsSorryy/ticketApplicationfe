import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../models/customer";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url= "http://localhost:8080/customer/user"
  constructor(private httpClient:HttpClient) { }

  register(customer:Customer){
    return this.httpClient.post(this.url,customer);
  }
}
