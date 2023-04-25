import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels: Hotel[] = [];
  hotelname='';

  constructor(private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.searchByName();
  }

  /*private getHotels(){
    this.hotelService.getHotelsList().subscribe(data => {
      this.hotels = data;
    });
  }*/

  //hotelDetails

  hotelDetails(id: number){
    //console.log(id);
    this.router.navigate(['hotel-details', id]);
  }

  updateHotel(id: number){
    //console.log(id);
    this.router.navigate(['update-hotel', id]);
  }

  removeAllEmps(){
    var status= confirm("Do you want to delete all the records?? Once deleted it can't be retrieved!!!  Please make sure !!!");
    if(status==true){this.hotelService.deleteAll().subscribe( data => {
          console.log(data);
         // this.refreshList();
        },
        error => {
          console.log(error);
        });
      }
      this.searchByName();
  }

  confirmDelete(hotel : Hotel){
    var status= confirm("You want to delete this record?");
     if (status==true) {
       this.deleteHotel(hotel.id);
          }
          this.router.navigate(['hotels']);
   }
  deleteHotel(id: number){
    //console.log(id);
    this.hotelService.deleteHotel(id).subscribe( data => {
      console.log(data);
      this.router.navigate(['hotels']);
    })
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


}
