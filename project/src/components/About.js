import React from 'react';

// style 
import '../styles/about.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

// images
import StacyDoore from '../images/meet-the-team/stacy-doore.jpeg'
import EmmeMcCabe from '../images/meet-the-team/emme-mccabe2.jpeg'
import YakuanaDavis from '../images/meet-the-team/yakuana-davis.jpeg'
import KateMorrison from '../images/meet-the-team/kate-morrison.jpeg'
import FinnBergquist from '../images/meet-the-team/finn-bergquist.jpeg'

import git2 from '../images/meet-the-team/36675751.png'
import git3 from '../images/meet-the-team/36677169.png'
import git4 from '../images/meet-the-team/34076044.png'


function About() {
    return (
        <div>

        <h1 class="text-uppercase"> Meet the Insite Project Team! </h1>

        <h2 class="team-title"> Project Management </h2>

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

        <h2 class="team-title"> Website Development </h2>

        <div class="flex-container">
            <div class="column">
                <img className="avatar" src={FinnBergquist} alt="Student Finn Bergquist "/>
                <h2><a href="https://www.linkedin.com/in/finn-bergquist/" className="link">Finn Bergquist '22</a></h2>
                <p> Bio </p>
            </div>
            <div class="column">
                <img className="avatar" src={YakuanaDavis} alt="Student Ya'Kuana Davis"/>
                <h2><a href="https://github.com/yakuana" className="link">Ya'Kuana Davis '21</a></h2>
                <p> Full-time student at Bowdoin College and Lambda School studying Computer Science, Web Devolpment and Chinese. </p>
            </div> 
            <div class="column">
                <img className="avatar" src={git4} alt="Student Liam Juskevice"/>
                <h2><a href="https://github.com/" className="link">Liam Juskevice '21</a></h2>
                <p> Bio </p>
            </div> 
            <div class="column">
                <img className="avatar" src={EmmeMcCabe} alt="Student Emme McCabe"/>
                <h2><a href="https://www.linkedin.com/in/emme-mccabe" className="link">Emme McCabe '20</a></h2>
                <p> Computer Science Major with an interest in the convergence of computing ethics and quantitative trading. </p>
            </div>

                
        </div>

        <h2 class="team-title"> Database Design </h2>
        <div class="flex-container">
            <div class="column">
                <img className="avatar" src={git3} alt="Student Ahmed Hameed"/>
                <h2><a href="https://www.linkedin.com/in/ahmed-hameed-521145166/" className="link">Ahmed Hameed '22</a></h2>
                <p> Computer Science Major at Bowdoin College with an interest in Software Development. </p>
            </div>

        </div>

        <h2 class="team-title"> UX/UI </h2>

        <h2 class="team-title"> Mobile Application </h2>

        <div class="flex-container">
            <div class="column">
                <img className="avatar" src={git3} alt="Student Adelaide Evans"/>
                <h2><a href="#" className="link">Adelaide Evans '22</a></h2>
                <p>  </p>
            </div>
            <div class="column">
                <img className="avatar" src={KateMorrison} alt="Student Kate Morrison"/>
                <h2><a href="https://www.linkedin.com/in/kathleen-morrison-780372156/" className="link">Kate Morrison '20</a></h2>
                <p>  </p>
            </div>

        </div>

        <h2 class="team-title"> Data Collection </h2>

        <h2 class="team-title"> Alexa Voice Integration </h2>

        <h2 class="team-title"> Tracking and Navigation </h2>


        </div>
    
    );
}

export default About;