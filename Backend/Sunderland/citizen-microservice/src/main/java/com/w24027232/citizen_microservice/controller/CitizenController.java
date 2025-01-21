package com.w24027232.citizen_microservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.w24027232.citizen_microservice.model.Citizen;
import com.w24027232.citizen_microservice.model.ConsumptionHistory;
import com.w24027232.citizen_microservice.service.CitizenService;

@RestController
@RequestMapping("api/citizen")
public class CitizenController {

	@Autowired
	CitizenService citizenService;
	
	@CrossOrigin(origins = "http://localhost:5002")
	@GetMapping("generateuser")
	public ResponseEntity<List<Citizen>> generateUserData(){
		return citizenService.generateUserData();
	}
	@CrossOrigin(origins = "http://localhost:5002")
	@GetMapping("getuser")
	public ResponseEntity<List<Citizen>> getUser(){
		return citizenService.getUser();
	}
	@CrossOrigin(origins = "http://localhost:5002")
	@PostMapping("generateconsumption")
	public ResponseEntity<List<ConsumptionHistory>> generateConsumptionData(){
		return citizenService.generateConsumptionData();
	}
}
