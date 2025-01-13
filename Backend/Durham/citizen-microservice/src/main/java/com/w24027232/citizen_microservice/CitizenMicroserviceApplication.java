package com.w24027232.citizen_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CitizenMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CitizenMicroserviceApplication.class, args);
	}

}
