package com.example.demo.server;

import java.util.List;
import com.example.demo.model.Hotel;

public interface HotelServer {
	
	Hotel saveHotel(Hotel hotel);
	List<Hotel>  getHotelFromDb();
	Hotel getHotelById(int hotelId);
	Hotel updateHotelDetails(Hotel hotel, int hotelId);
	void deleteHotelpById(int hotelId);
	void deleteAll();
	
	

}
