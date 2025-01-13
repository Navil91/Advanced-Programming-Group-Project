package com.w24027232.provider_microservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;

import com.w24027232.provider_microservice.model.ConsumptionHistory;


@FeignClient("CITIZEN-MICROSERVICE")
public interface ProviderInterface {
	@PostMapping("/api/citizen/generateconsumption")
	public ResponseEntity<List<ConsumptionHistory>> generateConsumptionData();
}
