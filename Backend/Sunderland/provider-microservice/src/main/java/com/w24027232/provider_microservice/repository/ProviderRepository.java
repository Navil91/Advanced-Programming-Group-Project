package com.w24027232.provider_microservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.w24027232.provider_microservice.model.Provider;
@Repository
public interface ProviderRepository extends JpaRepository<Provider,Integer>{

}
