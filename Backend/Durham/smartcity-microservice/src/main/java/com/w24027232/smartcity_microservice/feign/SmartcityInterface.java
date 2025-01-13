package com.w24027232.smartcity_microservice.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import com.w24027232.smartcity_microservice.model.TotalConsumption;


@FeignClient("PROVIDER-MICROSERVICE")
public interface SmartcityInterface {
	@GetMapping("/api/provider/gettotalconsumption")
	public ResponseEntity<List<TotalConsumption>> getTotalConsumptionData();
}
