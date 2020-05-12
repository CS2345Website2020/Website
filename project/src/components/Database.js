import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArtList from './ArtList.js'
import DisplayArt from './DisplayArt.js';
import { StageSpinner } from 'react-spinners-kit'

function Database() {

    const [art, setArt] = useState();

    useEffect(() => {
        const getArtData = () => {
            axios
                .get('https://artmuseumdraft.herokuapp.com/art/1')
                .then(response => {
                    // successful 
                    console.log("Art data response", response.data)

                    // save art data to state 
                    setArt(response.data)
                })
                .catch(error => {
                    // failure 
                    console.error("The API is currently down.", error)
                })
        }
        // call function to get data 
        getArtData(); 

    }, []); 

    return (
        <>
            { art ? <div className="bottom-padding">
                <h1>Database</h1>
                <p>All artwork and information displayed on this page is being pulled from the database created by the database team.</p>
                <p>To learn more about the creators of the back-end, check out the about section of our website.</p>
                <div>
                    <DisplayArt art={art}/>
                </div>
                <div>
                    <h3 className="data-section-titles">Art on Display</h3>
                    <ArtList />
                </div>
            </div> : <div style={{margin: 'auto', width: '40px', paddingTop: '90px'}}>
                <StageSpinner color="black"/>
            </div> }
        </>
    );
}

export default Database;