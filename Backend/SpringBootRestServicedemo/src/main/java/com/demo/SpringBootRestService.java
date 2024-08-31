package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootRestService {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootRestService.class, args);
		System.out.println("Spring is running");
	}

}
