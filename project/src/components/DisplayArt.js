import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Art.css"

// art image 
import Img181313 from '../images/artwork/1813.13.jpg';

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
            <div>
                <div id="display-text">
                    <h2 id="display-title">{art.title}</h2>
                    <h3 id="display-artist">{art.artist}</h3>
                </div>
                <div id="display-container">
                    <img src={Img181313} alt={`${art.title} by ${art.artist}`} id="display-image"/>
                    {/* <div>
                        <div id="display-text">
                            <h2 id="display-title">{art.title}</h2>
                            <h3 id="display-artist">{art.artist}</h3>
                        </div>
                        <div id="display-info">
                            <p><strong>Accession Number</strong> - {art.accession_number}</p>
                            <p><strong>Type, Medium and Support</strong> - {art.type}, {art.medium_support}</p>
                            <p><strong>Basic Description</strong> - {art.description_basic}</p>
                            <p><strong>Spatial Description</strong> - {art.description_spatial}</p>
                            <p><strong>Thematic Description</strong> - {art.description_thematic}</p>
                        </div>
                    </div> */}
                </div>
                <div id="display-info">
                    <p><strong>Accession Number</strong> - {art.accession_number}</p>
                    <p><strong>Type, Medium and Support</strong> - {art.type}, {art.medium_support}</p>
                    <p><strong>Basic Description</strong> - {art.description_basic}</p>
                    <p><strong>Spatial Description</strong> - {art.description_spatial}</p>
                    <p><strong>Thematic Description</strong> - {art.description_thematic}</p>
                </div>
            </div>
        ) : <h1>Loading</h1>
        }
        </>
    );
}

export default DisplayArt;