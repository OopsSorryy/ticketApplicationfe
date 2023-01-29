import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BuyTicketRequest} from "../models/buyTicketRequest";
import {Observable} from "rxjs";
import {BuyTicketResponse} from "../models/buyTicketResponse";

@Injectable({
  providedIn: 'root'
})
export class BuyTicketService {

  url="http://localhost:8080/buyTicket"
  updatePostponeUrl="http://localhost:8080/buyTicket/postponed?buyTicketId="
  updateCancelUrl= "http://localhost:8080/buyTicket/cancelled?buyTicketId="

  constructor(private httpClient:HttpClient) { }

  buyTicket(buyTicketRequest:BuyTicketRequest):Observable<BuyTicketResponse>{
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
    return this.httpClient.post<BuyTicketResponse>(this.url,buyTicketRequest,header);
  }
  getBuyTicketsByCustomerId(customerId:number){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
      return this.httpClient.get<BuyTicketResponse[]>(this.url+"/"+customerId,header);
  }

  getBuyTicketsByTicketId(ticketId:number){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
    return this.httpClient.get<BuyTicketResponse>(this.url+"/ticketId/"+ticketId,header);
  }

  updateBuyTicketPostponed(buyTicketId:number){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
    return this.httpClient.put<BuyTicketResponse>(this.updatePostponeUrl+buyTicketId,{},header);
  }

  updateBuyTicketCancelled(buyTicketId:number){
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
    return this.httpClient.put<BuyTicketResponse>(this.updateCancelUrl+buyTicketId,{},header);
  }

}
