import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StageSpinner } from 'react-spinners-kit';
import ZoneCard from './ZoneCard.js';

function Zones() {

    // initial state of art data 
    const [art, setArt] = useState()

    const [zone, setZone] = useState(1)

    useEffect(() => {
        const getArtData = () => {
            axios
                .get('https://cs2345-db-api.herokuapp.com/art_object/all')
                .then(response => {
                    // // successful 
                    console.log("Art data response", response.data)

                    // save art data to state 
                    setArt(response.data.art_objects)
                })
                .catch(error => {
                    // failure 
                    console.error("The API is currently down.", error)
                })
        }
        // call function to get data 
        getArtData(); 

    }, []); 
    
    if (!art) {
        return (<div style={{margin: 'auto', width: '40px', paddingTop: '90px'}}>
        <StageSpinner color="black"/>
    </div> )
    }

    return (
        <>
        <p>Click a button below to view the art in the corresponding zone.</p>
        <div id="zones-buttons">
            <button className="zone-buttons" onClick={() => setZone(1)}>Zone 1</button>
            <button className="zone-buttons" onClick={() => setZone(21)}>Zone 21</button>
            <button className="zone-buttons" onClick={() => setZone(31)}>Zone 31</button>
            <button className="zone-buttons" onClick={() => setZone(41)}>Zone 41</button>
        </div>
        <div id="zones-container">
            {art.map((artwork) => {
                return artwork.zoneId === zone ? <ZoneCard art={artwork} key={art.accession_number}/> : null
            })}
        </div>
        </>
    );
}

export default Zones;