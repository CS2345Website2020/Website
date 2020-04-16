import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import '../styles/about.css';

//images
import Blueprint from '../images/blueprint.png'
import GalleryPhoto from '../images/gallery.png'
import TeamPhoto from '../images/DemoDay.png'
import Database from '../images/Database.png'

function PHistory() {
    return (
        <div>
            <h1>History</h1>
        
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
                <img src = {TeamPhoto} alt='photo of gallery'></img>
                
                <p>
                They accomplished a lot but ran into some problems on the way. One of these included 
                changing their entire database structure creating compatibility complications amongst
                all the teams. The course's core curriculum is focused on database design, and this 
                project truly reinforces that. This is a visual depiction of their database.
                </p>
                <img src = {Database} alt='photo of gallery'></img>
            </TimelineItem>

            <TimelineItem
                key="002"
                dateText="Summer 2019"                
                style={{color: '#fff'}}                                        
            >
                <h3>Professor Doore's Summer Research</h3>
                
            </TimelineItem>
        </Timeline> 
        </div>
    );

}

export default PHistory;