package com.w24027232.provider_microservice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.w24027232.provider_microservice.model.Provider;
import com.w24027232.provider_microservice.model.TotalConsumption;
import com.w24027232.provider_microservice.service.ProviderService;

import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("api/provider")
public class ProviderController {

	@Autowired
	ProviderService providerService;
	
	@GetMapping("getconsumption")
	public ResponseEntity<List<Provider>> getConsumptionData(){
		return providerService.getConsumptionData();
	}
	@CrossOrigin(origins = "http://localhost:5003")
	@GetMapping("getallconsumption")
	public ResponseEntity<List<Provider>> getAllConsumptionData(){
		return providerService.getAllConsumtionData();
	}
	@GetMapping("gettotalconsumption")
	public ResponseEntity<List<TotalConsumption>> getTotalConsumptionData(){
		return providerService.getTotalConsumtionData();
	}
}
