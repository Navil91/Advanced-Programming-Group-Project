package com.w24027232.smartcity_microservice.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.w24027232.smartcity_microservice.feign.SmartcityInterface;
import com.w24027232.smartcity_microservice.model.Smartcity;
import com.w24027232.smartcity_microservice.model.TotalConsumption;
import com.w24027232.smartcity_microservice.repository.SmartcityRepository;

@Service
public class SmartcityService {
	@Autowired
	SmartcityRepository smartcityRepository;
	@Autowired
	SmartcityInterface smartcityInterface;
	public ResponseEntity<List<Smartcity>> getTotalConsumptionData() {
		try {
			List<TotalConsumption> totalConsumption = smartcityInterface.getTotalConsumptionData().getBody();
			List<Smartcity> smartcity = new ArrayList<>();
			for(TotalConsumption eachTotalConsumption:totalConsumption) {
				Smartcity smartcityData = new Smartcity();
				smartcityData.setProvider(eachTotalConsumption.getProvider());
				smartcityData.setDate(eachTotalConsumption.getDate());
				String consumptionValue = eachTotalConsumption.getConsumption().toString()+"kWh";
				smartcityData.setConsumption(consumptionValue);
				smartcity.add(smartcityData);
			}
			smartcityRepository.saveAll(smartcity);
			return new ResponseEntity<>(smartcity,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}
