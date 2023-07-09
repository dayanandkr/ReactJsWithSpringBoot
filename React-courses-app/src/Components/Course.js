import axios from "axios";
import React,{useEffect} from "react";
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import {redirect,useNavigate, useLocation} from 'react-router-dom'
import Update from "./Update";
const Course =({course,navigation, update}) =>{
    const navigate = useNavigate();
    useEffect(()=>{
        document.title="Course || LearncodeWith Dayanand";
    }, []);

    const deleteCourseById = (id)=>{
        axios.delete(`${base_url}/course/${id}`).then(
            (response)=>{
                toast.success("Course deleted Successfully");
                update(id);
            },(error)=>{
                toast.error("Course not deleted || Server Problem");
            }
        )
    }

const n = 6;
const moveToUpdat = ()=>{
    //<Update id={"1"} title={"Java"} description={"This Java course"}/>
    navigate('/Update',{user:n})
    // navigate('/Update',{user:"raj"}) 
 } 
    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold text-center">{course.title}</CardSubtitle>
                <CardText className="text-center">{course.description}</CardText>
                <div className="common-btn">
                    <Button color="danger"
                    onClick={() =>{
                        deleteCourseById(course.id)}} style={{margin:20}}>Delete</Button>
                    <Button color="warning ml-3" 
                    onClick={() => moveToUpdat({course})}>Update</Button>
                </div>
            </CardBody>
        </Card>

    );

}

export default Course;

