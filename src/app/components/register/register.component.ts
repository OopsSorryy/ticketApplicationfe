import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,FormControl,Validators} from "@angular/forms";
import {RegisterService} from "../../services/register.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private registerService:RegisterService,
              private toastrService:ToastrService,private router:Router) {
  }
  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(){
    this.userAddForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
      matchingPassword:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required]
    });
  }
  register(){
    if (this.userAddForm.valid){
      let customerModel = Object.assign({},this.userAddForm.value);
      this.registerService.register(customerModel).subscribe(response=>{
        this.toastrService.success(
            "you have successfully registered")
        this.router.navigate(["login"]);
      },responseError=>{
        if (responseError.error.password){
          this.toastrService.error(responseError.error.password)
        }
        if (responseError.error.email){
          this.toastrService.error(responseError.error.email)
        }
      });
    }
  }
}
