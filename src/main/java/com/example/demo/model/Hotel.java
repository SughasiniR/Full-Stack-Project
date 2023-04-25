package com.example.demo.model;

import org.hibernate.annotations.DynamicUpdate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
//table annotation to create table
@Table(name = "home_stay")
@DynamicUpdate
public class Hotel {
	//id annotation to create id column and set to increase automatically
	@Id
	//set id to be unique
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer id;
	//other attributes of hotel class
	@Column(name = "hotel_name", nullable = false)
	private String hotelName;
	private Integer ratings;
	private String place;
	private String state;
	private String amenities;
	private String meals; 
	private String contact;
	private int cost;
	private String location;
	private String email;
	
public Hotel() {}
	
	public Hotel(Integer id,String hotelName, String place, String state,Integer ratings,String amenities,String meals,String contact,Integer cost,String location,String email) {
		super();
		this.id=id;
		this.hotelName = hotelName;
		this.place = place;
		this.state=state;
		this.ratings=ratings;
		this.amenities=amenities;
		this.meals=meals;
		this.contact=contact;
		this.cost=cost;
		this.location=location;
		this.email=email;
	}
	//getter setter methods for all attributes
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id=id;
	}
	
	public int getRatings() {
		return ratings;
	}

	public void setRatings(int ratings) {
		this.ratings = ratings;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}
	
	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getMeals() {
		return meals;
	}

	public void setMeals(String meals) {
		this.meals = meals;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	
	public String getHotelName() {
		return hotelName;
	}
	public void setHotelName(String hotelName) {
		this.hotelName = hotelName;
	}

	public String getAmenities() {
		return amenities;
	}

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}

	public int getCost() {
		return cost;
	}

	public void setCost(int cost) {
		this.cost = cost;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
