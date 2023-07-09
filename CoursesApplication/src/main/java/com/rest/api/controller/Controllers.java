package com.rest.api.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.bind.annotation.*;
import com.rest.api.entities.Course;

import com.rest.api.services.Services;

@RestController
@CrossOrigin
public class Controllers {
	
	@Autowired
	private Services services;
	
	public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
	// Get COurse
	
	@GetMapping("/courses")
	public List<Course>getCourses(){
		
		return this.services.getAllCourse();
	}
	
	// Get Course by Id
	
	@GetMapping("/course/{id}")
	public Course getCourseById(@PathVariable int id) {
		return this.services.getById(id);
		
	}

	//Add Course
	
	@PostMapping("/course")
	public Course addCourse(@RequestBody Course course) {
		return this.services.addCourses(course);
	}
	
	//Update Course
	@PutMapping("/course/{id}")
		public Course updateCourse(@RequestBody Course course) {
			return this.services.updateCourse(course);
		}
	
	
	//Delete Course by id
	@DeleteMapping("/course/{id}")
	public void deleteCourseById(@PathVariable int id) {
		this.services.deleteCourse(id);
	}

}
