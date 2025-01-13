package com.w24027232.citizen_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.w24027232.citizen_microservice.model.ConsumptionHistory;
@Repository
public interface ConsumptionRepository extends JpaRepository<ConsumptionHistory,Integer>{

}
