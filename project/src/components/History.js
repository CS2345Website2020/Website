import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../styles/about.css';

//styles
import '../styles/HistoryStyles.css'

//images
// import Blueprint from '../images/blueprint.png'
import GalleryPhoto from '../images/gallery.png'
import TeamPhoto from '../images/DemoDay.png'
import Database from '../images/Database.png'
import Database1 from '../images/TeamPhotos/inclasssketch.jpg'
// import Regensburg from '../images/city.jpg'
import COSIT from '../images/cosit.png'
import SCRUM from '../images/scrum.png'

function PHistory() {
    return (
        <div className = 'wrapper'>
            <h1>History</h1>
                <div>
                    <div className = 'wrapper'>          
                    <Timeline lineColor={'#ddd'}>
                        <TimelineItem
                            key="001"
                            dateText="Spring-2019"
                            style={{ color: '#e86971' }}
                        >
                            <h3>Starting the Database</h3>
                            
                            <p>
                            Last years team started this project. Their core tasks included UX/UI, data collection, 
                            database design, application development, computer tracking, and voice interface. The 
                            students were divided up into teams to work on each task. 
                            </p>
                            <img src = {TeamPhoto} className = 'picture1' alt='Database team from 2019'></img>
                            
                            <p>
                            They accomplished a lot but ran into some problems on the way. One of these included 
                            changing their entire database structure creating compatibility complications amongst
                            all the teams. The course's core curriculum is focused on database design, and this 
                            project truly reinforces that. This is a visual diagram of their database.
                            </p>
                            <img src = {Database} className = 'picture1' alt='Database design plans'></img>
                            <p> 
                            This is the specific gallery that the project was implemented in:
                            </p>
                            <img src = {GalleryPhoto} className = 'picture1' alt='Bowdoin College art gallery'></img>
                        </TimelineItem>

                        <TimelineItem
                            key="002"
                            dateText="Summer 2019"                
                            style={{color: '#fff'}}                                        
                        >
                            <h3>Professor Doore's Summer Research</h3>
                            <p>
                            Last summer, Anais Sarrazin(Class of 2020) conducted research with Professor Doore,
                            continuing the work that was accomplished in the Spring of 2019. Together, they 
                            published this paper.


                            <a href="http://ceur-ws.org/Vol-2455/paper9.pdf"> Natural-Language Scene Descriptions forAccessible Non-Visual Museum Exhibit Exploration and Engagement.  </a>

                            
                             They also travelled to Regensburg, Germany to present their research at the 14th
                            International Conference on Spatial Information Theory. 
                            <img src = {COSIT} className = 'picture1' alt='COSIT Info'></img>

                            </p>
                            
                        </TimelineItem>

                        <TimelineItem
                            key="003"
                            dateText="Spring 2020"                
                            style={{color: '#61b8ff'}}                                        
                        >
                            <h3>This Year's Progress</h3>
                            <p>This semester, similarly to last year, our class was divided into team groups to
                            work on different tasks. There was an additional team in charge of building and maintaining this website. 
                            With the introduction of remote learning, due to COVID-19 we all faced new challenges, forcing many of the teams to completely reevaluate 
                            their goals. The teams learned the importance of communication because each team required 
                            information and compatibility from the others. Remote teamwork involved weekly meetings for
                            each team and class "stand-up meetings" where each team would share the developments and demo any progess. Each team also had a Microsoft Team where they could view one another’s
                            completed, ongoing, and future sprints on scrum boards. Here is an example from our Tracking Team:
                            <img src = {SCRUM} className = 'picture1' alt='Scrum from Tracking Team'></img>
                            </p>

                            <h4> Website Team </h4>
                            <ul>                     
                            <li>Provided information and updates about project team members and their skills</li> 
                            <li>Online gallery of art displayed from database</li>
                            <li>Administrative access to database </li>
                            </ul>

                            <h5> Mobile App Team </h5>
                            <ul>                     
                            <li>ADA compliance</li> 
                            <li>Implemented audible aspects of app</li>
                            <li>Created pages with leveled descriptions of art</li>
                            </ul>

                            <h5> UX/UI Team</h5>
                            <ul>                     
                            <li>Completed Coyote Verbal Description Training</li> 
                            <li>Completed basic, spatial, and thematic painting descriptions for 5 paintings, which completed a corner of the gallery.</li>
                            <li>Received feed back from blind/low vision participants about such descriptions via email and phone interviews. </li>
                            <li>Entered all gallery data into the database via Swagger.</li>
                            <li>Subjects for user testing of the database.</li>
                            </ul>
                            

                            <h6>Alexa Team</h6>
                            <ul>
                            <li>Created team server</li>
                            <li>Connected to the database using https requests through server</li>
                            <li>Updated past model with new descriptions and information</li>
                            </ul>

                            <h7>Database Team</h7>
                            <ul>
                            <li>Fully functioning relational SQL database used to represent the Bowdoin Art Gallery hosted at ClearDB</li>
                            <li>Node.js API Server, hosted at Heroku. API endpoints are documented using Swagger</li>
                            <li>API Server developed using a special npm package, “nodespull,” built by our very own, Isaac Kabuika</li>
                            <li>Map model using artwork adjacency and zoning. The map is modeled as a graph, where nodes are artworks.</li>
                            <li>Json Web Token authentication (paired with admin level accounts) allows for art museum managers to administer the database – via the portal built by the Website Team.</li>
                            </ul>
                            <p>Here is the development of the Database: </p>
                            <img src = {Database1} className = 'picture1' alt='Database Concept Sketch'></img>
                            

                            <h8>Data Collection</h8>
                            <ul>
                            <li>Served as a liaison between other groups and the museum by responding to specific teams needs and data requests.</li>
                            <li>Began the development of a virtual tour using the Google Virtual Your creator.</li>
                            <li>Incorporated accessibility features into the google tour such as audio descriptions and picture enlargement. </li>
                            </ul>


                        </TimelineItem>



                    </Timeline> 
                    </div>
                </div>
        </div>
    );

}

export default PHistory;