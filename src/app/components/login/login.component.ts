import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup

  constructor(private formBuilder:FormBuilder, private authService:AuthService,
              private toastrService:ToastrService,private router:Router) {
  }
  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    });
  }

  signIn(){
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)
      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.success("You have successfully logged in")
        localStorage.setItem("token",response.jwtToken)
        localStorage.setItem("customerId",String(response.customerResponse.customerId));
        this.router.navigate(["trips"]);
      })
    }
  }

}
