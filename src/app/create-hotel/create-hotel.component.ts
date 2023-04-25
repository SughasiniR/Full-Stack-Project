import { Component,OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit{

  hotel: Hotel = new Hotel();
  errorname='';
  errormsg='';
  errorrating='';
  errorplace='';
  errorstate='';
  erroramenities='';
  errormeals='';
  errorcost='';
  errorlocation='';
  erroremail='';
  errorcontact='';
  constructor(private hotelService: HotelService,public loginService:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveHotel(){
    this.hotelService.createHotel(this.hotel).subscribe( data =>{
      console.log(data);
      
    },
    error => console.log(error));
  }

  goToHostLogin(){
    
  }
  
  onSubmit(){
    if((this.hotel.hotelName === '')&&(this.hotel.ratings === 0)&&
    (this.hotel.place === '')&&(this.hotel.state === '')&&(this.hotel.amenities === '')&&
    (this.hotel.meals === '')&&(this.hotel.cost === 0)&&(this.hotel.location === '')&&
    (this.hotel.email === '')&&(this.hotel.contact === '')){
      this.errormsg="Please fill * field required ";
    }
    else if(this.hotel.hotelName === ''){
      this.errorname="Hotel Name field required ";
    }
    else if(this.hotel.ratings === 0){
      this.errorrating="Ratings * field required ";
    }
    else if(this.hotel.place === ''){
      this.errorplace="Place * field required ";
    }
    else if(this.hotel.state === ''){
      this.errorstate="State * field required ";
    }
    else if(this.hotel.amenities === ''){
      this.erroramenities="Amenities * field required ";
    }
    else if(this.hotel.meals === ''){
      this.errormeals="Meals * field required ";
    }
    else if(this.hotel.cost === 0){
      this.errorcost="Cost * field required ";
    }
    else if(this.hotel.location === ''){
      this.errorlocation="Location * field required ";
    }
    else if(this.hotel.email === ''){
      this.erroremail="Email * field required ";
    }
    else if(this.hotel.contact === ''){
      this.errorcontact="Contact * field required ";
    }
    else if((this.hotel.hotelName !== '')&&(this.hotel.ratings !== 0)&&
    (this.hotel.place !== '')&&(this.hotel.state !== '')&&(this.hotel.amenities !== '')&&
    (this.hotel.meals !== '')&&(this.hotel.cost !== 0)&&(this.hotel.location !== '')&&
    (this.hotel.email !== '')&&(this.hotel.contact !== '')){
    console.log(this.hotel);
    this.saveHotel();
    var status= confirm("Created Successfully!!! Thank you for choosing Us!!! Have a great success!!!");
    history.back();
    }
    
  }
}
