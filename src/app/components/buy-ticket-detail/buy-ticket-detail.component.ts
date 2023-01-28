import {Component, OnInit} from '@angular/core';
import {BuyTicketResponse} from "../../models/buyTicketResponse";
import {ActivatedRoute} from "@angular/router";
import {BuyTicketService} from "../../services/buy-ticket.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-buy-ticket-detail',
  templateUrl: './buy-ticket-detail.component.html',
  styleUrls: ['./buy-ticket-detail.component.css']
})
export class BuyTicketDetailComponent implements OnInit{

  ticket:BuyTicketResponse

  ticketId:number
  constructor(private activatedRoute:ActivatedRoute,private buyTicketService:BuyTicketService,private toastrService:ToastrService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
       console.log(params["buyTicketId"]) ;
       this.ticketId=params["buyTicketId"]
      this.getBuyTicketsByTicketId()
    });
  }
  getBuyTicketsByTicketId(){
    this.buyTicketService.getBuyTicketsByTicketId(this.ticketId).subscribe(response=>{
      this.ticket=response
    })
  }

  updatePostponeBuyTicket(){
    this.buyTicketService.updateBuyTicketPostponed(this.ticketId).subscribe(response=>{
      this.ticket=response
      this.toastrService.success("Updated Statue PostPone")
    })
  }

  updateCancelBuyTicket(){
    this.buyTicketService.updateBuyTicketCancelled(this.ticketId).subscribe(response=>{
      this.ticket=response
      this.toastrService.success("Updated Statue Cancel")
    })
  }
}
