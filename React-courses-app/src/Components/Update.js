import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { toast } from "react-toastify";
import {Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";
import base_url from "../api/bootapi";
import {redirect,useNavigate, useLocation} from 'react-router-dom'
//import Course from "./Course";



const Update = ({courses,route}, props) => {
    useEffect(()=>{
        fetchData();
        document.title="Add Course || LearncodeWith Dayanand";
    }, []);

    const [course, setCourses] = useState({});
    const [getId, setGetId] = useState({});
    // const { user } = route?.params;
    const location = useLocation();
    
    const handleForm=(e) =>{

        console.log(course);

        e.preventDefault();
    };
    const fetchData = async (id) =>{
        console.log("kjlkjfd", props.user);
        try {
            const result = await axios.get(`${base_url}/courses`);
            console.log("fetchDataResponse",JSON.stringify(result));
            setGetId(result);
            console.log("iddddd",JSON.stringify(result.data));
            console.log("const", getId);
        } catch (error) {
            // Handle errors
            console.log("error", error);
        }
}
    // Creating function to post data on server
//     const updateCourse = async (id) =>{
//         try {
//             const result = await axios.put(`${base_url}/course/${id}`);
//             console.log("result", result);
//         } catch (error) {
//             // Handle errors
//             console.log("error", error);
//         }
// }

const deleteCourseById = (id)=>{
    axios.put(`${base_url}/course/${id}`).then(
        (response)=>{
            toast.success("Course deleted Successfully");
        },(error)=>{
            toast.error("Course not deleted || Server Problem");
        }
    )
}
    return (
        <Fragment>
            <h1 className="text-center">{props.user}</h1>
            <h1 className="text-center">Update Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="uesrId">Uesr Id</label>
                    <Input type="text" class="form-control" id="userId" placeholder="Enter Here" name="uesrId"
                    onChange={(e) =>{
                        setCourses({...course, id: props.id});
                    }}
                    // disabled={true} 
                    value={course.id}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" class="form-control" id="title" placeholder="Enter Here" name="title"
                    onChange={(e) =>{
                        setCourses({...course, title: props.title});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Description</label>
                    <Input type="textarea" class="form-control" id="description" placeholder="Enter Here description" name="description"
                    onChange={(e) =>{
                        setCourses({...course, description: props.description});
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success"onClick={() =>{
                        deleteCourseById(course.id)}}>Update Course</Button>

                    <Button type="reset" color="warning" ml-3>Clear</Button>
                </Container>
            </Form>

        </Fragment>
    );

}

export default Update;