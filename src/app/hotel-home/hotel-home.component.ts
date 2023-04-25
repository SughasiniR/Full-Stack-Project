import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.component.html',
  styleUrls: ['./hotel-home.component.css']
})
export class HotelHomeComponent implements OnInit {
  constructor(public loginService:AuthenticationService,private router: Router) { }
  ngOnInit() {
    
  }
  addhotel(){
    this.loginService.logOut();
    this.router.navigate(['/login']);
  }


}
