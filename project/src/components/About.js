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
import AhmedHameed from '../images/meet-the-team/ahmed-hameed.jpeg'
import TheaKelsey from '../images/meet-the-team/thea-kelsey.jpeg'
import TravisRase from '../images/meet-the-team/travis-rase.jpeg'
import AnaisSarrazin from '../images/meet-the-team/anais-sarrazin.jpeg'
import NellFusco from '../images/meet-the-team/nell-fusco.jpeg'
import HenryIsaacson from '../images/meet-the-team/henry-isaacson.jpeg'
import ConnorFitzgerald from '../images/meet-the-team/connor-fitzgerald.jpeg'
import RussellOBrien from '../images/meet-the-team/russell-obrien.jpeg'
import GeorgeBenz from '../images/meet-the-team/george-benz.jpeg'
import HarrySherman from '../images/meet-the-team/harry-sherman.jpeg'
import MaxTanous from '../images/meet-the-team/max-tanous.jpeg'
import RyanDonlan from '../images/meet-the-team/ryan-donlan.jpeg'
import TashaChrist from '../images/meet-the-team/tasha-christ.jpeg'
import AdelaideEvans from '../images/meet-the-team/adelaide-evans.jpeg'
import BradIngersoll from '../images/meet-the-team/brad-ingersoll.jpeg'
import IsaacKabuika from '../images/meet-the-team/isaac-kabuika.jpeg'


//git images
//import git2 from '../images/meet-the-team/36675751.png'
import git3 from '../images/meet-the-team/36677169.png'
import git4 from '../images/meet-the-team/34076044.png'
//import git5 from '../images/meet-the-team/10201229.png'


function About() {
    return (
        <div className="bottom-padding">

        <h1 className="text-uppercase"> Meet the Insite Project Team! </h1>

        <h2 className="team-title"> Project Management </h2>

        <div className="flex-container">
                <div className="column">
                    <img className="avatar" src={StacyDoore} alt="Prof. Stacy Doore"/>
                    <h2><a href="https://www.bowdoin.edu/profiles/faculty/sdoore/index.html" className="link">Prof. Stacy Doore</a></h2>
                    <p> Spatial cognition and indoor navigation expert, UX/UI, Assistive Technologies, natural language and VR/AR applications </p>
                </div>
                <div className="column">
                    <img className="avatar" src={AnaisSarrazin} alt="Student Anaïs Sarrazin"/>
                    <h2><a href="https://www.github.com/anaissarrazin" className="link">Anaïs Sarrazin '20</a></h2>
                    <p> Computer Science and Math Major </p>
                </div>
        </div>

        <h2 className="team-title"> Website Development </h2>

        <div className="flex-container">
            <div className="column">
                <img className="avatar" src={FinnBergquist} alt="Student Finn Bergquist "/>
                <h2><a href="https://www.linkedin.com/in/finn-bergquist/" className="link">Finn Bergquist '22</a></h2>
                <p> Computer Science and Physics double major with interest in musical technology. </p>
            </div>
            <div className="column">
                <img className="avatar" src={YakuanaDavis} alt="Student Ya'Kuana Davis"/>
                <h2><a href="https://github.com/yakuana" className="link">Ya'Kuana Davis '21</a></h2>
                <p> Computer Science and Asian Studies double major. Full Stack Web Devolpment student at Lambda School. </p>
            </div> 
            <div className="column">
                <img className="avatar" src={git4} alt="Student Liam Juskevice"/>
                <h2><a href="https://github.com/" className="link">Liam Juskevice '21</a></h2>
                <p> Computer Science Major and aspiring tech bro. </p>
            </div> 
            <div className="column">
                <img className="avatar" src={EmmeMcCabe} alt="Student Emme McCabe"/>
                <h2><a href="https://www.linkedin.com/in/emme-mccabe" className="link">Emme McCabe '20</a></h2>
                <p> Computer Science Major exploring the convergence of computing ethics and quantitative trading. </p>
            </div>   
        </div>

        <h2 className="team-title"> Database Design </h2>
        <div className="flex-container">
            <div className="column">
                <img className="avatar" src={ConnorFitzgerald} alt="Student Connor Fitzgerald"/>
                <h2><a href="https://linkedin.com/in/cfitzgerald11" className="link">Connor Fitzgerald '21</a></h2>
                <p> Environmental studies major with an interest in data engineering and sustainable computing. </p>
            </div>
            <div className="column">
                <img className="avatar" src={AhmedHameed} alt="Student Ahmed Hameed"/>
                <h2><a href="https://www.linkedin.com/in/ahmed-hameed-521145166/" className="link">Ahmed Hameed '22</a></h2>
                <p> Computer Science Major at Bowdoin College with an interest in Software Development. </p>
            </div>
            <div class="column">
                <img className="avatar" src={IsaacKabuika} alt="Student Isaac Kabuika"/>
                <h2><a href="https://www.linkedin.com/in/isaac-kabuika" className="link">Isaac Kabuika '20</a></h2>
                <p> Computer Science major with experience in Web Engineering, Algorithm Optimization, and Artificial Intelligence. </p>
            </div>
            <div class="column">
                <img className="avatar" src={RyanDonlan} alt="Student Ryan Donlan"/>
                <h2><a href="https://www.linkedin.com/in/ryan-donlan-4912a1179/" className="link">Ryan Donlan '21 </a></h2>
                <p> Computer Science major with interests in software engineering, cyber security, and big data </p>
            </div>
        </div>

        <h2 className="team-title"> UX/UI </h2>

        <div className="flex-container">
            <div className="column">
                <img className="avatar" src={NellFusco} alt="Student Nell Fusco '21"/>
                <h2><a href="https://www.linkedin.com/in/nell-eleanore-fusco-b53412142/" className="link">Nell Fusco '21</a></h2>
                <p> Computer Science and Government and Legal Studies double major with an interest in Software Engineering. </p>
            </div>
            <div className="column">
                <img className="avatar" src={TheaKelsey} alt="Student Thea Kelsey '20"/>
                <h2><a href="https://www.linkedin.com/in/cynthia-thea-kelsey-520b61128/" className="link">Thea Kelsey '20</a></h2>
                <p> Sociology major and CS minor. </p>
            </div>
            <div className="column">
                <img className="avatar" src={BradIngersoll} alt="Student Bradley Ingersoll '21"/>
                <h2><a href="https://www.linkedin.com/mwlite/in/bradley-ingersoll-8b903417b" className="link">Bradley Ingersoll '21</a></h2>
                <p> Computer Science major with an interest in big data and digital marketing  </p>
            </div>
        </div>

        <h2 className="team-title"> Mobile Application </h2>

        <div class="flex-container">
            <div class="column">
                <img className="avatar" src={AdelaideEvans} alt="Student Adelaide Evans"/>
                <h2><a href="https://www.linkedin.com/in/adelaide-evans-a21826198/" className="link">Adelaide Evans '22</a></h2>
                <p> Computer Science Major with interests in software development. </p>
            </div>
            <div className="column">
                <img className="avatar" src={KateMorrison} alt="Student Kate Morrison"/>
                <h2><a href="https://www.linkedin.com/in/kathleen-morrison-780372156/" className="link">Kate Morrison '20</a></h2>
                <p> Mathematics major with an interest in data science and data visualization. </p>
            </div>
            <div className="column">
                <img className="avatar" src={TravisRase} alt="Student Travis Rase"/>
                <h2><a href="https://www.linkedin.com/in/travis-rase-763b9514b/" className="link">Travis Rase '20</a></h2>
                <p> Computer Science major and Physics minor deeply passionate about software engineering.  </p>
            </div>
            <div class="column">
                <img className="avatar" src={MaxTanous} alt="Student Max Tanous"/>
                <h2><a href="https://www.linkedin.com/in/max-tanous-210930140/" className="link">Max Tanous '20</a></h2>
                <p> Computer Science major and full-stack developer. </p>
            </div>
        </div>

        <h2 class="team-title"> Data Collection </h2>
      
        <div class="flex-container">
        <div class="column">
                <img className="avatar" src={TashaChrist} alt="Student Tasha Christ"/>
                <h2><a href="https://www.linkedin.com/in/anastasia-christ-5b9960104/" className="link">Tasha Christ '20</a></h2>
                <p> Neuroscience major and computer science minor with an interest in medicine </p>
        </div>
        <div class="column">
                <img className="avatar" src={HarrySherman} alt="Student Harry Sherman"/>
                <h2><a href="https://www.linkedin.com/in/harry-sherman/" className="link">Harry Sherman '21</a></h2>
                <p> Computer Science and Education student interested in FinTech and EdTech </p>
        </div>
        </div>

        <h2 class="team-title"> Alexa Voice Integration </h2>
        <div class="flex-container">
	
        <div class="column">
                <img className="avatar" src={HenryIsaacson} alt="Student Henry Isaacson"/>
                <h2><a href="https://www.linkedin.com/in/henry-isaacson-061b29196/" className="link">Henry Isaacson '22</a></h2>
                <p> Computer Science Major with an interest in computational biology and genomics. </p>
        </div>
        <div class="column">
                <img className="avatar" src={RussellOBrien} alt="Student Russell O'Brien"/>
                <h2><a href="https://www.linkedin.com/in/russell-o-brien-526639171/" className="link">Russell O'Brien '20</a></h2>
                <p> Computer Science Major with interests in AI and Machine Learning </p>
        </div>
        </div>
        

        <h2 class="team-title"> Tracking and Navigation </h2>
        <div class="flex-container">
        <div class="column">
                <img className="avatar" src={GeorgeBenz} alt="Student George Benz"/>
                <h2><a href="https://www.linkedin.com/in/george-benz/" className="link">George Benz '20</a></h2>
                <p> Full-time passion student at Bowdoin college looking for any kind of work in the Computer Science Sector and other relevant Sectors </p>
        </div>
        <div class="column">
                <img className="avatar" src={git3} alt="Student Casey Edmonds-Estes"/>
                <h2><a href="https://www.linkedin.com/in/casey-edmonds-estes-a87702183/" className="link">Casey Edmonds-Estes '22</a></h2>
                <p> Computer Scientist, roboticist, fencer, bassoonist. </p>
        </div> 
        <div class="column">
                <img className="avatar" src={git4} alt="Student Aly Hummel"/>
                <h2><a href="https://www.linkedin.com/in/alexandra-hummel3/" className="link">Aly Hummel '21</a></h2>
                <p> CS and Government major and Duolingo addict. </p>
        </div>
        </div>
        </div>
    
    );
}

export default About;