package com.w24027232.registry_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class RegistryMicroserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RegistryMicroserviceApplication.class, args);
	}

}
