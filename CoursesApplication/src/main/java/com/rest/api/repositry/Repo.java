package com.rest.api.repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rest.api.entities.Course;


@Repository
public interface Repo extends  JpaRepository<Course, Integer>{

}
