package com.w24027232.citizen_microservice_controller_test;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class CitizenControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void testGenerateConsumptionData() throws Exception{
		
		ResultActions result = mockMvc.perform(post("/generateconsumption")
				.contentType(MediaType.APPLICATION_JSON));
		
		result.andExpect(status().isCreated())
			.andExpect(status().isCreated());
    }
	
}
