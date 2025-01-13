package com.w24027232.smartcity_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class SmartcityMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmartcityMicroserviceApplication.class, args);
	}

}
