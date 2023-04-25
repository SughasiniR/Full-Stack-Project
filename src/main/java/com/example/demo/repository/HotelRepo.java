package com.example.demo.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.Hotel;

//specialization of component annotation, repository annotation is used to create spring bean for repositories
@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer>{

	List<Hotel> findByRatings(int ratings);
	List<Hotel> findByStateContaining(String state);
	List<Hotel> findByHotelNameContaining(String hotelName);
}
