package com.rest.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rest.api.entities.Course;
import com.rest.api.repositry.Repo;

@Service
public class Services {
	@Autowired
	private Repo repo;
	
	public Course addCourses(Course c) {
		repo.save(c);
		return c;
	}
	
public List<Course> getAllCourse(){
		
		return repo.findAll();
	}
public Course getById(long id) {
	Optional<Course> c= repo.findById((int)id);
	if(c.isPresent()) {
		return c.get();
	}
		return null;
}

public Course updateCourse(Course course) {
	repo.save(course);
	return course;
}

public void deleteCourse(long id) {
	
	repo.deleteById((int)id);
}

}
