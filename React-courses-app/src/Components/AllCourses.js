import React, { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const AllCourses = ()=>{
    useEffect(() => {
        getAllCourseFromServer();
    }, []);

    const updateCourses =(id)=>{
        setCourses(courses.filter((c) => c.id != id));
    };
    
        const [courses, setCourses]=useState([]);
    useEffect(()=>{
        document.title="View Course || LearncodeWith Dayanand";
    }, []);

    //Get All Course from Server
    const getAllCourseFromServer = ()=>{
    axios.get(`${base_url}/courses`).then(
        (response)=>{
            //for Success
            //console.log(response);
            console.log(response.data);
            setCourses(response.data);
            toast.success("Course has been loaded");
        },
        (error)=>{
            //for error
            console.log(error);
            toast.error("Somthing went wrong");
        }
    );
};



    return( 
        <div>
            <h1>All  Courses</h1>
            <p>List of All Courses are as follows</p>
            {
                courses.length > 0
                ? courses.map((item) => <Course key={item.id} course={item}  update={updateCourses} /> )
                :"No Courses"
            }
        </div>
    );

}

export default AllCourses;