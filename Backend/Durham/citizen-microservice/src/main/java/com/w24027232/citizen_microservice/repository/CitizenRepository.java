package com.w24027232.citizen_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.w24027232.citizen_microservice.model.Citizen;

@Repository
public interface CitizenRepository extends JpaRepository<Citizen,Integer>{

}
