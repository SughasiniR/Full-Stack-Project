import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-booked-user-details',
  templateUrl: './booked-user-details.component.html',
  styleUrls: ['./booked-user-details.component.css']
})
export class BookedUserDetailsComponent {
  dateOfTravel='';
  noOfPeople='';
  address='';
  email='';
  lastName='';
  firstName='';
  errorfname='';
  errorlname='';
  erroremail='';
  erroraddress='';
  errorppl='';
  errordate='';
  errormsg='';

  constructor(private route: ActivatedRoute,private router: Router) { }

  BookNow(){

    if((this.firstName === '')&&(this.email === '')&& (this.lastName ==='')&&(this.dateOfTravel === '')&&(this.noOfPeople ==='')&&(this.address ==='')){
      this.errormsg='Please fill * field';
    }
    else if(this.firstName === ''){
      this.errorfname='FirstName is required';
    }
    else if(this.lastName === ''){
      this.errorlname='LastName is required';
    }
    else if(this.email=== ''){
      this.erroremail='Email is required';
    }
    else if(this.dateOfTravel ===''){
      this.errordate='Date is required';
    }
    else if(this.address === ''){
      this.erroraddress='Address is required';
    }
    else if(this.noOfPeople === ''){
      this.errorppl='No. of people is required';
    }
    else if((this.firstName !== '')&&(this.email!== '')&& (this.lastName !=='')&&(this.dateOfTravel !== '')&&(this.noOfPeople !=='')&&(this.address !=='') )
    {
      var status= confirm("Booked Successfully!!! Have your Beautiful Journey!!! Thanks for Booking!!!");
      this.router.navigate(['/booknow']);
    }

    
  }
}
