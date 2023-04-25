import { Component,OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit{

  id: number = 0;
  hotel: Hotel = new Hotel();
  constructor(private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hotelService.getHotelById(this.id).subscribe(data => {
      this.hotel = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.hotelService.updateHotel(this.id, this.hotel).subscribe( data =>{
      this.goToHotelList();
    }
    , error => console.log(error));
    var status= confirm("Updated Successfully!!!");
  }

  goToHotelList(){
    this.router.navigate(['/hotels']);
  }
}
