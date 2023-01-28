import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit{

  customerId:number

  constructor(private router:Router) {
  }
  ngOnInit(): void {
  }

  getCustomerId(){
    if(localStorage.getItem("token")){
      // @ts-ignore
      this.customerId = +localStorage.getItem("customerId")
      return true;
    }
    else{
      return false
    }
  }
  goToProfile(){
    this.router.navigate(["profile/"+this.customerId])
  }
  logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("customerId")

    this.router.navigate([""])
  }

}
