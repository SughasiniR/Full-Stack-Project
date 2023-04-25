import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit{

  username = '';
  password = '';
  errorname='';
  errorpassword='';
  invalidLogin = false
  
  
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  
  checkLogin() {
    
    
    if(this.loginservice.authenticateadminname(this.username)){
      this.invalidLogin = true;
      this.errorname='Username is required';
      
    }
    else if(this.loginservice.authenticateadminpassword(this.password)){
      this.invalidLogin = true;
      this.errorpassword='Password must be at least 6 characters';
    } 
    else if (this.loginservice.authenticateadmin(this.username, this.password)) {
      this.router.navigate(['hotels']);
      console.log("navigate..");
      this.invalidLogin = false;
    } 
    else{
      this.invalidLogin = true;
      this.errorname='Username is requird';
      this.errorpassword='Password must be at least 6 characters';
    }
  }
}
