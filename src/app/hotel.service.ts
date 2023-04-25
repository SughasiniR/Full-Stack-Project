import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseURL = "http://localhost:8080/api/v1/hotels";

  constructor(private httpClient: HttpClient) { }
  
  getHotelsList(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}`);
  }

  createHotel(hotel: Hotel): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, hotel);
  }

  getHotelById(id: number): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}/${id}`);
  }

  findByEmail(email: any): Observable<Hotel>{
    return this.httpClient.get<Hotel>(`${this.baseURL}?email=${email}`);
  }

  updateHotel(id: number, hotel: Hotel): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, hotel);
  }

  //localhost:4200/delete/5
  deleteHotel(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  } 
  
  deleteAll(): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}`);
  }

  findByName(name: any): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`${this.baseURL}?name=${name}`);
  }

  findByRating1(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByRating1`);
  }

  findByRating2(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByRating2`);
  }

  findByRating3(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByRating3`);
  }

  findByRating4(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByRating4`);
  }

  findByRating5(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByRating5`);
  }

  findByGoa(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByGoa`);
  }

  findByHimachal(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByHimachal`);
  }

  findByDelhi(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByDelhi`);
  }

  findByKarnataka(): Observable<Hotel[]>{
    return this.httpClient.get<Hotel[]>(`${this.baseURL}/fetchByKarnataka`);
  }

  /*getPasswordByContact(contact:any):Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${contact}`);
  }*/
}