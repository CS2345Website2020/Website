import React from 'react';
import {Image, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

// style 
import '../styles/about.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

// image 
import StacyDoore from '../images/meet-the-team/stacy-doore.jpeg'
import EmmeMcCabe from '../images/meet-the-team/emme-mccabe2.jpeg'
import YakuanaDavis from '../images/meet-the-team/yakuana-davis.jpeg'
import git2 from '../images/meet-the-team/36675751.png'
import git3 from '../images/meet-the-team/36677169.png'
import git4 from '../images/meet-the-team/34076044.png'


function About() {
    return (
        <div>

        <h1 class="text-uppercase"> Meet the Insite Project Team! </h1>

        <h2 class="text-uppercase"> Project Management </h2>

        <div class="flex-container">
                <div class="column">
                    <img className="avatar" src={StacyDoore} alt="Prof. Stacy Doore"/>
                    <h2><a href="https://www.bowdoin.edu/profiles/faculty/sdoore/index.html" className="link">Prof. Stacy Doore</a></h2>
                    <p> Spatial cognition and indoor navigation expert, UX/UI, Assistive Technologies, natural language and VR/AR applications </p>
                </div>
                <div class="column">
                    <img className="avatar" src={git2} alt="Student Anaïs Sarrazin"/>
                    <h2><a href="https://www.github.com/anaissarrazin" className="link">Anaïs Sarrazin '20</a></h2>
                    <p> Computer Science and Math Major </p>
                </div>
        </div>

        <h2 class="text-uppercase"> Website Development </h2>

        <div class="flex-container">

          <div class="column">
                <img className="avatar" src={EmmeMcCabe} alt="Student Emme McCabe"/>
                <h2><a href="https://www.github.com/emmemccabe" className="link">Emme McCabe '20</a></h2>
                <p> Computer Science Major with an interest in the convergence of computing ethics and quantitative trading. </p>
            </div>
            <div class="column">
                <img className="avatar" src={git4} alt="Student Liam Juskevice"/>
                <h2><a href="https://github.com/" className="link">Liam Juskevice '21</a></h2>
                <p> Bio </p>
            </div> 
            <div class="column">
                <img className="avatar" src={git3} alt="Student Finn Bergquist "/>
                <h2><a href="https://www.github.com/" className="link">Finn Bergquist '22</a></h2>
                <p> Bio </p>
            </div>
            <div class="column">
                <img className="avatar" src={YakuanaDavis} alt="Student Ya'Kuana Davis"/>
                <h2><a href="https://github.com/yakuana" className="link">Ya'Kuana Davis '21</a></h2>
                <p> Full-time student at Bowdoin College and Lambda School studying Computer Science, Web Devolpment and Chinese. </p>
            </div> 
                
        </div>

        <h2 class="text-uppercase"> Database Design </h2>

        <h2 class="text-uppercase"> UX/UI </h2>

        <h2 class="text-uppercase"> Mobile Application </h2>

        <h2 class="text-uppercase"> Data Collection </h2>

        <h2 class="text-uppercase"> Alexa Voice Integration </h2>

        <h2 class="text-uppercase"> Tracking and Navigation </h2>






        </div>
    
    );
}

export default About;