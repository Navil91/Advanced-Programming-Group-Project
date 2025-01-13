package com.w24027232.citizen_microservice.service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.w24027232.citizen_microservice.model.Citizen;
import com.w24027232.citizen_microservice.model.ConsumptionHistory;
import com.w24027232.citizen_microservice.repository.CitizenRepository;
import com.w24027232.citizen_microservice.repository.ConsumptionRepository;

@Service
public class CitizenService {

	@Autowired
	CitizenRepository citizenRepository;
	
	@Autowired
	ConsumptionRepository consumptionRepository;
	
	public ResponseEntity<List<Citizen>> generateUserData() {
		try {
			List<Citizen> citizen = new ArrayList<>();
			for(int i=1;i<=450;i++) {
				Citizen user = new Citizen();
				user.setId(i);
				if(i<=150) {
					user.setProvider(i<=50?"A":i<=100?"B":"C");
					user.setUserType("SmartMeter");
				}
				else if(i<=450) {
					user.setProvider(i<=250?"A":i<=350?"B":"C");
					user.setUserType("Manual");
				}
				citizen.add(user);
			}
			citizenRepository.saveAll(citizen);
			return new ResponseEntity<>(citizen,HttpStatus.OK);
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.BAD_REQUEST);
		}
		
	}
	public ResponseEntity<List<ConsumptionHistory>> generateConsumptionData() {
		try {
			List<ConsumptionHistory> consumptionHistory = consumptionRepository.findAll();
			List<ConsumptionHistory> newConsumption = new ArrayList<>();
			List<Citizen> citizen = citizenRepository.findAll();
			if(consumptionHistory==null || consumptionHistory.isEmpty()) {
				for(Citizen user: citizen) {
					ConsumptionHistory consumption = new ConsumptionHistory();
					consumption.setUserid(user.getId());
					consumption.setProvider(user.getProvider());
					Random random = new Random();
			        int randomValue = random.nextInt(18) + 7;
			        consumption.setConsumption(randomValue);
			        //date
			        LocalDate currentDate = LocalDate.now();
			        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
			        String formattedDate = currentDate.format(dateFormatter);
			        consumption.setDate(formattedDate);
			        //time
			        LocalTime currentTime = LocalTime.now();
			        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
			        String formattedTime = currentTime.format(timeFormatter);
			        consumption.setTime(formattedTime);
			        newConsumption.add(consumption);
				}
				consumptionRepository.saveAll(newConsumption);
				return new ResponseEntity<>(newConsumption,HttpStatus.OK);
			}
			else {
				for(ConsumptionHistory user: consumptionHistory) {
					ConsumptionHistory consumption = new ConsumptionHistory();
					consumption.setUserid(user.getUserid());
					consumption.setProvider(user.getProvider());
					Random random = new Random();
			        int randomValue = random.nextInt(4) + 1;
			        int newConsumptionValue = user.getConsumption()+randomValue;
			        consumption.setConsumption(newConsumptionValue);
			      //date
			        LocalDate currentDate = LocalDate.now();
			        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MMM-yyyy");
			        String formattedDate = currentDate.format(dateFormatter);
			        consumption.setDate("15-Dec-2024");
			        //time
			        LocalTime currentTime = LocalTime.now();
			        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
			        String formattedTime = currentTime.format(timeFormatter);
			        consumption.setTime(formattedTime);
			        newConsumption.add(consumption);
				}
				consumptionRepository.saveAll(newConsumption);
				return new ResponseEntity<>(newConsumption,HttpStatus.OK);
			}
			
		}catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}
	public ResponseEntity<List<Citizen>> getUser() {
		try {
		List<Citizen> citizen = citizenRepository.findAll();
		return new ResponseEntity<>(citizen,HttpStatus.OK);
		}
		catch(Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(new ArrayList<>(),HttpStatus.INTERNAL_SERVER_ERROR);
			}
	}

}
