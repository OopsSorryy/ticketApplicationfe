import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
    return this.httpClient.post<BuyTicketResponse>(this.url,buyTicketRequest);
  }
  getBuyTicketsByCustomerId(customerId:number){
      return this.httpClient.get<BuyTicketResponse[]>(this.url+"/"+customerId);
  }

  getBuyTicketsByTicketId(ticketId:number){
    return this.httpClient.get<BuyTicketResponse>(this.url+"/ticketId/"+ticketId);
  }

  updateBuyTicketPostponed(buyTicketId:number){
    return this.httpClient.put<BuyTicketResponse>(this.updatePostponeUrl+buyTicketId,{});
  }

  updateBuyTicketCancelled(buyTicketId:number){
    return this.httpClient.put<BuyTicketResponse>(this.updateCancelUrl+buyTicketId,{});
  }

}
