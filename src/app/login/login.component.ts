import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username = '';
  password = '';
  errorname='';
  errorpassword='';
  errormsg='';
  invalidLogin = false
  
  
  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  
  checkLogin() {
    
    if((this.loginservice.authenticateusername(this.username))&&(this.loginservice.authenticatepassword(this.password))){
      this.invalidLogin = true;
      this.errormsg='Please fill * field';
    }
    else if(this.loginservice.authenticateusername(this.username)){
      this.invalidLogin = true;
      this.errorname='Username is required';
      
    }
    else if(this.loginservice.authenticatepassword(this.password)){
      this.invalidLogin = true;
      this.errorpassword='Password must be at least 6 characters';
    } 
    else if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate(['create-hotel']);
      console.log("navigate..");
      this.invalidLogin = false;
    } 
    
  }
  
  
}




