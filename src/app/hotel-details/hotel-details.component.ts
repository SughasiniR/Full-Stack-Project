import { Component,OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';


@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit{

  id: number = 0;
  hotel: any = [];
  
  constructor(private route: ActivatedRoute, private hotelService: HotelService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hotel = new Hotel();
    
    this.hotelService.getHotelById(this.id).subscribe( data => {
      this.hotel = data;
    });
  }
 
  
  onClick(){
    console.log(this.hotel);
    history.back();
  }
  

}
