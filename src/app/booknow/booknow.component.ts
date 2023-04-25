import { Component,OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {

  hotels: Hotel[] = [];
  hotelname='';
  constructor(private hotelService: HotelService,
    private router: Router) { }

    ngOnInit(): void {
      this.getHotels();
    }

    hotelDetails(id: number){
      //console.log(id);
      this.router.navigate(['hotel-details', id]);
    }
    
    private getHotels(){
      this.hotelService.getHotelsList().subscribe(data => {
        this.hotels = data;
      });
    }


    searchByName(){
      this.hotelService.findByName(this.hotelname)
      .subscribe(
        data => {
          this.hotels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
    }
  
    fetchHotelByRating1(){
      this.hotelService.findByRating1().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
  
    fetchHotelByRating2(){
      this.hotelService.findByRating2().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
  
    fetchHotelByRating3(){
      this.hotelService.findByRating3().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
  
    fetchHotelByRating4(){
      this.hotelService.findByRating4().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  
    fetchHotelByRating5(){
      this.hotelService.findByRating5().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    fetchHotelByGoa(){
      this.hotelService.findByGoa().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    fetchHotelByHimachal(){
      this.hotelService.findByHimachal().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    fetchHotelByDelhi(){
      this.hotelService.findByDelhi().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    fetchHotelByKarnataka(){
      this.hotelService.findByKarnataka().subscribe(
        data => {
          this.hotels = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    /*searchByName(){
      this.hotelService.findByName(this.hotelname)
      .subscribe(
        data => {
          this.hotels = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
    }*/

}
