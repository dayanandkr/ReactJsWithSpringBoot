import React, { useState, useEffect } from "react";
import { Button, Container } from "reactstrap";


const Home = () => {
    useEffect(()=>{
        document.title="Home || LearncodeWith Dayanand";
    }, []);
    return (
        <div class="jumbotron text-center">
            <div  >
                <h4>Code With Dayanand</h4>
                <p class="lead">This is developed by LearnWith Dayanand for Learning purpose
                backend is on Spring Boot and front end on React Js</p>
                <Container>
                    <Button color="primary" outline>Start Learning</Button>
                </Container>
            </div>
        </div>
    );
}

export default Home;


