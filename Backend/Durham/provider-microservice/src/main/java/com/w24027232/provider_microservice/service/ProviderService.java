package com.w24027232.provider_microservice.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.w24027232.provider_microservice.feign.ProviderInterface;
import com.w24027232.provider_microservice.model.ConsumptionHistory;
import com.w24027232.provider_microservice.model.Provider;
import com.w24027232.provider_microservice.model.TotalConsumption;
import com.w24027232.provider_microservice.repository.ProviderRepository;

@Service
public class ProviderService {

	@Autowired
	ProviderRepository providerRepository;

	@Autowired
	ProviderInterface providerInterface;
	
	public ResponseEntity<List<Provider>> getConsumptionData() {
		try {
			List<ConsumptionHistory> consumption = providerInterface.generateConsumptionData().getBody();
			List<Provider> providerData = new ArrayList<>();
			for(ConsumptionHistory usage : consumption) {
				Provider provider = new Provider();
				provider.setUserid(usage.getUserid());
				provider.setProvider(usage.getProvider());
				provider.setDate(usage.getDate());
				provider.setTime(usage.getTime());
				provider.setConsumption(usage.getConsumption());
				providerData.add(provider);
			}
			providerRepository.saveAll(providerData);
			
			return new ResponseEntity<>(providerData,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<List<TotalConsumption>> getTotalConsumtionData() {
		try {
			List<TotalConsumption> totalConsumption = new ArrayList<>();
			List<Provider> provider = providerRepository.findAll();
			int totalConsumptionOfA = 0;
			int totalConsumptionOfB=0;
			int totalConsumptionOfC=0;
			for(Provider eachProvider:provider) {
				if("A".equals(eachProvider.getProvider())) {
					totalConsumptionOfA=totalConsumptionOfA + eachProvider.getConsumption();
				}else if("B".equals(eachProvider.getProvider())) {
					totalConsumptionOfB=totalConsumptionOfB + eachProvider.getConsumption();
				}else if("C".equals(eachProvider.getProvider())) {
					totalConsumptionOfC=totalConsumptionOfC + eachProvider.getConsumption();
				}
			}
			//date
	        LocalDate currentDate = LocalDate.now();
	        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("MMM-yyyy");
	        String formattedDate = currentDate.format(dateFormatter);
			TotalConsumption consumptionTotalA = new TotalConsumption(formattedDate,"A",totalConsumptionOfA);
			TotalConsumption consumptionTotalB = new TotalConsumption(formattedDate,"B",totalConsumptionOfB);
			TotalConsumption consumptionTotalC = new TotalConsumption(formattedDate,"C",totalConsumptionOfC);
			totalConsumption.add(consumptionTotalA);
			totalConsumption.add(consumptionTotalB);
			totalConsumption.add(consumptionTotalC);
			return new ResponseEntity<>(totalConsumption,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	public ResponseEntity<List<Provider>> getAllConsumtionData() {
		try {
		List<Provider> provider = providerRepository.findAll();
		return new ResponseEntity<>(provider,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
}
