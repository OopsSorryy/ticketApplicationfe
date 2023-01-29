import {Component, OnInit} from '@angular/core';
import {BuyTicketService} from "../../services/buy-ticket.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit{

  buyTicketForm:FormGroup

  tripId:number;
  constructor(private buyTicketService:BuyTicketService,private formBuilder:FormBuilder,private toastrService:ToastrService,
              private router:Router,private activatedRoute:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.tripId = params["tripId"];
      console.log(this.tripId)
      this.createBuyTicketForm();
    })
  }


  createBuyTicketForm(){
    this.buyTicketForm = this.formBuilder.group({
      seatNumber:["",Validators.required],
    });
  }
  buyTicket(){
    if(this.buyTicketForm.valid){
      let buyTicketModel = Object.assign({},this.buyTicketForm.value)
      buyTicketModel.tripId = this.tripId;
      buyTicketModel.customerId = Number(localStorage.getItem("customerId"));

      this.buyTicketService.buyTicket(buyTicketModel).subscribe(response=>{
        this.toastrService.success("I hope you have fun on your trip")
        this.router.navigate(["profile/"+Number(localStorage.getItem("customerId"))])
      })
    }
  }

}
