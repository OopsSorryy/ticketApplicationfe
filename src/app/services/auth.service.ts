import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthCustomer} from "../models/authCustomer";
import {TokenModel} from "../models/tokenModel";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url="http://localhost:8080/login"
  constructor(private httpClient:HttpClient) { }


  login(authCustomer:AuthCustomer):Observable<TokenModel>{
    return this.httpClient.post<TokenModel>(this.url,authCustomer);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else {
      return false;
    }
  }
}
