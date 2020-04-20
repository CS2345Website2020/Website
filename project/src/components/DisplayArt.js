import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Art.css"

// art image 
import Img18551 from '../images/artwork/1855.1.jpg';

function DisplayArt() {

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
        {art ? (
            <div id="display-container">
                <img src={Img18551} alt={`${art.title} by ${art.artist}`} id="display-image"/>
                <div id="display-text">
                    <h2>{art.title}</h2>
                    <h3>{art.artist}</h3>
                    <div id="display-info">
                        <p><strong>Creation Date</strong> - {art.creation_date}</p>
                        <p><strong>Type</strong> - {art.type}</p>
                        <p><strong>Accession Number</strong> - {art.accession_number}</p>
                        <p><strong>Medium and Support</strong> - {art.medium_support}</p>
                        <p><strong>Credit Line</strong>- {art.credit_line}</p>
                        <p><strong>Description</strong> - {art.description}</p>
                    </div>
                </div>
            </div>
        ) : <h1>Loading</h1>
        }
        </>
    );
}

export default DisplayArt;