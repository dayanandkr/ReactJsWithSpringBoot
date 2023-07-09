import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";


const Menus = () => {
    useEffect(()=>{
        document.title="Menus || LearncodeWith Dayanand";
    }, []);
    return (
        <div class="list-group">
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action>View Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Contact</Link>
            
        </div>

    );
}

export default Menus;