package com.w24027232.smartcity_microservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.w24027232.smartcity_microservice.model.Smartcity;
import com.w24027232.smartcity_microservice.service.SmartcityService;

@RestController
@RequestMapping("api/smartcity")
public class SmartcityController {
	@Autowired
	SmartcityService smartcityService;
	
	@GetMapping("gettotalconsumption")
	public ResponseEntity<List<Smartcity>> getTotalConsumptionData(){
		return smartcityService.getTotalConsumptionData();
		
	}
}
