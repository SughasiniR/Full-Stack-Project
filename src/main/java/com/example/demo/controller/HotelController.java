package com.example.demo.controller;


import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.model.Hotel;
import com.example.demo.repository.HotelRepo;
import com.example.demo.service.HotelServiceImpl;
	
	//crossorigin annotation enables cross-origin resource sharing only for this specific method
	@CrossOrigin(origins = "http://localhost:4200")
	//rest controller annotation is used at class level and allows class to handle request
	//made by client
	@RestController
	//request mapping annotation is used to map web request onto specific handler classes or methods
	@RequestMapping("/api/v1/")
	public class HotelController {
	public HotelServiceImpl hotelServer;
			
		public HotelController(HotelServiceImpl hotelServer) {
			this.hotelServer = hotelServer;
		}

		@Autowired
		HotelRepo hotelRepo;
		//post mapping annotation maps http post request onto specific handler method
		//post http request is used to create resource
		@PostMapping("hotels")
		public ResponseEntity<Hotel> saveHotel(@RequestBody Hotel hotel){
			try {
			return new ResponseEntity<Hotel>(hotelServer.saveHotel(hotel), HttpStatus.CREATED);
			}
			catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		// put http is used to update resource and put mapping annotation for mapping http put request onto 
		//specific handler methods
		@PutMapping("hotels/{hotelId}")
		public ResponseEntity<Hotel> updateHotelById(@PathVariable("hotelId") int id,@RequestBody Hotel hotel){
			try{
				return new ResponseEntity<Hotel>(hotelServer.updateHotelDetails(hotel, id), HttpStatus.OK);		
			}
			catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		//localhost:8080
		
		//get http request is used to get single or multiple resources
		//get mapping annotation for mapping http get request onto specific handler methods
		@GetMapping("hotels/{id}")
		public ResponseEntity<Hotel>  getHotelById(@PathVariable("id")  int hotelId){
			try {
				return new ResponseEntity<Hotel>(hotelServer.getHotelById(hotelId), HttpStatus.OK);
			}
			catch(Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		

		@GetMapping("hotels")
		public ResponseEntity<List<Hotel> > getAllHotels(@RequestParam(required=false)  String name){
			try {
				List<Hotel> hotelList=new ArrayList<Hotel>();
				if(name!=null) {
					hotelRepo.findByHotelNameContaining(name).forEach(hotelList::add);
					return new ResponseEntity<>(hotelList,HttpStatus.OK);
				}
				else {
					hotelList=hotelRepo.findAll();
					return new ResponseEntity<>(hotelList,HttpStatus.OK);
				}
			}
			catch(Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		//get mapping to fetch specific rating
		@GetMapping("/hotels/fetchByRating1")
		public ResponseEntity<List<Hotel>> findByRating1() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByRatings(1);

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByRating2")
		public ResponseEntity<List<Hotel>> findByRating2() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByRatings(2);

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByRating3")
		public ResponseEntity<List<Hotel>> findByRating3() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByRatings(3);

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByRating4")
		public ResponseEntity<List<Hotel>> findByRating4() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByRatings(4);

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				};
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByRating5")
		public ResponseEntity<List<Hotel>> findByRating5() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByRatings(5);

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		//get mapping to fetch specific state
		@GetMapping("/hotels/fetchByGoa")
		public ResponseEntity<List<Hotel>> findByGoa() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByStateContaining("Goa");

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByHimachal")
		public ResponseEntity<List<Hotel>> findByHimachal() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByStateContaining("Himachal");

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByDelhi")
		public ResponseEntity<List<Hotel>> findByDelhi() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByStateContaining("Delhi");

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@GetMapping("/hotels/fetchByKarnataka")
		public ResponseEntity<List<Hotel>> findByKarnataka() {
			try {
				List<Hotel> stateHotelList = hotelRepo.findByStateContaining("Karnataka");

				if (stateHotelList.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}
				return new ResponseEntity<>(stateHotelList, HttpStatus.OK);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		//delete http method is used to delete single or multiple resource
		//delete mapping annotation for mapping http delete  request onto specific  handler methods
	@DeleteMapping("hotels/{id}")
		public ResponseEntity<String> deleteHotelById(@PathVariable("id")  int hotelId){
			try{
				hotelServer.deleteHotelpById(hotelId);
				return new ResponseEntity<String>("deleted successfully", HttpStatus.OK);
			}
			catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		
		@DeleteMapping("/hotels")
		public ResponseEntity<HttpStatus> deleteAll() {
			try {
				hotelServer.deleteAll();
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} 
			catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}

		}

		
	}


