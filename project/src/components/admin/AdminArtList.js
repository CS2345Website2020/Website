import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminArtCard from './AdminArtCard';
import ArtImgs from '../../images/artwork/index.js';

function AdminArtList(props) {
    // initial state of art data 
    const [art, setArt] = useState([])
    
    useEffect(() => {
        const getArtData = () => {
            axios
                .get('https://artmuseumdraft.herokuapp.com/art')
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
        <section id="admin-art-container">
            {art.map(artwork => {    
                
                // find correct image 
                let photo = ArtImgs.filter(image => image.id === parseInt(artwork.id))
                
                // create an art card for each artwork 
                return <AdminArtCard art={artwork} photo={photo[0].img} key={art.accession_number}/>
            })}
        </section>
    );
}

export default AdminArtList;