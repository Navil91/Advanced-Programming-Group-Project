package com.w24027232.provider_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ProviderMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProviderMicroserviceApplication.class, args);
	}

}
