import React from 'react';
import Navbar from "../components/Navbar"
import "./About.css";


function About() {
    return(
        <div className="container">


            <Navbar />
            <h1 className="title">Welcome to my React app</h1>
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet.
            </p>

            <button className="button">Get started</button>
        </div>
    );
};

export default About;