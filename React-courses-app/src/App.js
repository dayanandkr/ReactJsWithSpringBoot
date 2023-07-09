import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Components/Home';
import Header from './Components/Header';
import Course from './Components/Course';
import AllCourses from './Components/AllCourses';
import AddCourse from './Components/AddCourse';
import Menus from './Components/Menus';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from './Components/Update';


function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer/>
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/add-course' element={<AddCourse />}/>
            <Route path='/Update' element={<Update />}/>
            <Route path='/view-course' element={<AllCourses />}/>
          </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>


  );
}

export default App;
