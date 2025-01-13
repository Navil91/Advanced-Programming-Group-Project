package com.w24027232.smartcity_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.w24027232.smartcity_microservice.model.Smartcity;
@Repository
public interface SmartcityRepository extends JpaRepository<Smartcity,Integer>{

}
