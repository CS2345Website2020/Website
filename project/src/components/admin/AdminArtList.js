import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminArtCard from './AdminArtCard';
// import ArtImgs from '../../images/artwork/index.js';

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

    }, [art]); 
    

    return (
        <table id="admin-list-container">
            <thead>
                <tr>
                    {/* <th>Image</th> */}
                    <th class="row-1 row-Anumb">Accession Number</th>
                    <th class="row-2 row-Title">Title</th>
                    <th class="row-3 row-Artist">Artist</th>
                    <th class="row-4 row-Type">Type</th>
                    <th class="row-5 row-Medium">Medium Support</th>
                    <th class="row-6 row-Credit">Credit Line</th>
                    <th class="row-7 row-Desc">Description</th>
                    <th class="row-8 row-Date">Creation Date</th>
                    <th class="row-9 row-Edit"></th>
                </tr>
            </thead>
            <tbody>
            {art.map(artwork => {    
                
                // find correct image 
                // let photo = ArtImgs.filter(image => image.id === parseInt(artwork.id))
                
                // create an art card for each artwork 
                return <AdminArtCard art={artwork} key={art.accession_number}/>
            })}
            </tbody>
        </table>
    );
}

export default AdminArtList;