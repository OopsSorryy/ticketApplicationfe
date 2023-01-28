import {Component, OnInit} from '@angular/core';
import {CustomerResponse} from "../../models/customerResponse";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {BuyTicketService} from "../../services/buy-ticket.service";
import {BuyTicketResponse} from "../../models/buyTicketResponse";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  customerResponse:CustomerResponse;

  buyTicketResponse:BuyTicketResponse[];

  ticket:BuyTicketResponse;

  param:number

  constructor(private activatedRoute:ActivatedRoute,private customerService:CustomerService,
              private buyTicketService:BuyTicketService,private router:Router) {
  }
  ngOnInit(): void {
    this.getCustomerByCustomerId()
    this.getBuyTicketByCustomerId()

  }

  // @ts-ignore
  customerId:number = +localStorage.getItem("customerId");

  getCustomerByCustomerId(){
    this.customerService.getCustomerById(this.customerId).subscribe(response=>{
      this.customerResponse=response
    })
  }
  getBuyTicketByCustomerId(){
    this.buyTicketService.getBuyTicketsByCustomerId(this.customerId).subscribe(response=>{
      this.buyTicketResponse=response;
    })
  }




}
