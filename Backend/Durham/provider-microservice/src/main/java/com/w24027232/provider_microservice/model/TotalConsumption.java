package com.w24027232.provider_microservice.model;


public class TotalConsumption {
	
	private String date;
	private String provider;
	private Integer consumption;
	public TotalConsumption() {}
	public TotalConsumption(String date, String provider, Integer consumption) {
		super();
		this.date = date;
		this.provider = provider;
		this.consumption = consumption;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getProvider() {
		return provider;
	}
	public void setProvider(String provider) {
		this.provider = provider;
	}
	public Integer getConsumption() {
		return consumption;
	}
	public void setConsumption(Integer consumption) {
		this.consumption = consumption;
	}
}
