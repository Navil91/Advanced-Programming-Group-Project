package com.w24027232.api_gateway.routes;

import org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions;
import org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.function.RequestPredicates;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

@Configuration
public class Routes {
	@Bean
	public RouterFunction<ServerResponse>citizenMicroserviceRoute(){
		return GatewayRouterFunctions.route("citizen-microservice")
				.route(RequestPredicates.path("/api/citizen/generateconsumption"),HandlerFunctions.http("http://localhost:8280"))
				.route(RequestPredicates.path("/api/citizen/getuser"),HandlerFunctions.http("http://localhost:8280"))
				.build();
	}
	
	@Bean
	public RouterFunction<ServerResponse>providerMicroserviceRoute(){
		return GatewayRouterFunctions.route("citizen-microservice")
				.route(RequestPredicates.path("/api/provider/getconsumption"),HandlerFunctions.http("http://localhost:8281"))
				.route(RequestPredicates.path("/api/provider/getallconsumption"),HandlerFunctions.http("http://localhost:8281"))
				.build();
	}
	@Bean
	public RouterFunction<ServerResponse>smartcityMicroserviceRoute(){
		return GatewayRouterFunctions.route("citizen-microservice")
				.route(RequestPredicates.path("/api/smartcity/gettotalconsumption"),HandlerFunctions.http("http://localhost:8084"))
				.build();
	}
}
