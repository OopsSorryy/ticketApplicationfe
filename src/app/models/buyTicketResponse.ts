import {TripResponse} from "./tripResponse";
import {Statue} from "./statue";
import {CustomerResponse} from "./customerResponse";

export interface BuyTicketResponse {
  buyTicketId:number;

  seatNumber:number;

  statue:Statue;

  tripResponse:TripResponse;

  customerResponse:CustomerResponse;
}
