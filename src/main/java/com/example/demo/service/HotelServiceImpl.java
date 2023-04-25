package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.example.demo.model.Hotel;
import com.example.demo.repository.HotelRepo;
import com.example.demo.server.HotelServer;

//specialization of component annotation, service annotation is used to create spring bean at service layer
@Service
public class HotelServiceImpl implements HotelServer{
	HotelRepo hotelRepo;

	public HotelServiceImpl(HotelRepo hotelRepo) {
		this.hotelRepo = hotelRepo;
	}

	public Hotel saveHotel(Hotel hotel) {
		return hotelRepo.save(hotel);
	}

	@Override
	public List<Hotel> getHotelFromDb() {
		//System.out.println(hotelRepo.findAll());
		return hotelRepo.findAll();
	}
	

	@Override//5
	public Hotel getHotelById(int hotelId) {
		Optional<Hotel> hotel = hotelRepo.findById(hotelId);
		if(hotel.isPresent()) {
			return hotel.get();
		}
		else {
			return null;
		}
	}
	
	

	@Override
	public Hotel updateHotelDetails(Hotel newVal, int hotelId) {
		Optional<Hotel> hotel = hotelRepo.findById(hotelId);
		if(hotel.isPresent()) {
			Hotel existingHotel = hotel.get();  //'2', 'mny@123', 'abc', 'xyz'

			existingHotel.setHotelName(newVal.getHotelName());
			existingHotel.setPlace(newVal.getPlace());
			existingHotel.setState(newVal.getState());
			existingHotel.setRatings(newVal.getRatings());
			existingHotel.setAmenities(newVal.getAmenities());
			existingHotel.setMeals(newVal.getMeals());
			existingHotel.setContact(newVal.getContact());
			existingHotel.setCost(newVal.getCost());
			existingHotel.setLocation(newVal.getLocation());
			existingHotel.setEmail(newVal.getEmail());
			hotelRepo.save(existingHotel);
			return existingHotel;
		}
		else {
			return null;
		}
	}

	@Override
	public void deleteHotelpById(int hotelId) {
		Optional<Hotel> hotel = hotelRepo.findById(hotelId);
		if(hotel.isPresent()) {
			hotelRepo.deleteById(hotelId);
		}	
	}
	
	@Override
	public void deleteAll() {
		hotelRepo.deleteAll();
	}

}
