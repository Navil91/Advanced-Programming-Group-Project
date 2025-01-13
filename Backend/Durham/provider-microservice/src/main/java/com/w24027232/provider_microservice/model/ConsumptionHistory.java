package com.w24027232.provider_microservice.model;



public class ConsumptionHistory {
	
	private Integer userid;
	private String provider;
	private Integer consumption;
	private String date;
	private String time;
	public ConsumptionHistory() {}
	public ConsumptionHistory(Integer userid, String provider, Integer consumption, String date, String time) {
		super();
		this.userid = userid;
		this.provider = provider;
		this.consumption = consumption;
		this.date = date;
		this.time = time;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
}
