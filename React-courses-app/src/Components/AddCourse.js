import axios from "axios";
import React, { Fragment,useEffect, useState } from "react";
import { toast } from "react-toastify";
import {Button, Form, FormGroup, Label, Input, FormText, Container } from "reactstrap";
import base_url from "../api/bootapi";



const AddCourse = () => {
    useEffect(()=>{
        document.title="Add Course || LearncodeWith Dayanand";
    }, []);

    const [course, setCourses] = useState({});

    const handleForm=(e) =>{

        console.log(course);
       postDataToServer(course);

        e.preventDefault();
    };

    // Creating function to post data on server
    const postDataToServer = (data) =>{
        axios.post(`${base_url}/course`, data).then(
            (response) =>{
                console.log(response);
                
                toast.success("Course added successfully");
            },(error) =>{
                console.log(error);
                toast.warning("Error : Something went wrong");
            }
        );
    };

    return (
        <Fragment>
            <h1 className="text-center">Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="uesrId">Uesr Id</label>
                    <Input type="text" class="form-control" id="userId" placeholder="Enter Here" name="uesrId"
                    onChange={(e) =>{
                        setCourses({...course, id: e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" class="form-control" id="title" placeholder="Enter Here" name="title"
                    onChange={(e) =>{
                        setCourses({...course, title: e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <label for="description">Description</label>
                    <Input type="textarea" class="form-control" id="description" placeholder="Enter Here description" name="description"
                    onChange={(e) =>{
                        setCourses({...course, description: e.target.value});
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>

                    <Button type="reset" color="warning" ml-3>Clear</Button>
                </Container>
            </Form>

        </Fragment>
    );

}

export default AddCourse;