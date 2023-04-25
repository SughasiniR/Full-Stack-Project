import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  firstName='';
  email = '';
  password = '';
  errorname='';
  erroremail='';
  errorpwd='';
  errormsg='';
  constructor(private router: Router,
    private loginservice: AuthenticationService) {}
  ngOnInit(){
    
  }
  signIn(){
    if((this.firstName === '')&&(this.email=== '')&& (this.password ==='')){
      this.errormsg='Please fill * field';
    }
    else if(this.firstName === ''){
      this.errorname='FirstName is required';
    }
    else if(this.email=== ''){
      this.erroremail='Email is required';
    }
    else if(this.password ===''){
      this.errorpwd='Password is required';
    }
    else if((this.firstName !== '')&&(this.email !== '')&&(this.password !== '') )
    {
    this.loginservice.getSignIn(this.email,this.password);
    this.router.navigate(['login']);
    }
    
  }
  
}
