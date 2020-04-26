import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminArtCard from './AdminArtCard';

// search bar icon 
import { FaSearch } from 'react-icons/fa';


function AdminArtList() {
    // initial state of art data 
    const [art, setArt] = useState([])

    // search bar state 
    const [search, setSearch] = useState("")

    // loop through art object 
    const loopObj = (artObj) => {
        for (let [key, value] of Object.entries(artObj)) {
            console.log(`key ${key}, value ${value}`);
            if (key === "id") {
                continue
            } else if (value.toLowerCase().includes(search)) {
                return <AdminArtCard art={artObj} key={artObj.accession_number}/>
            }
        }
    }
    
    useEffect(() => {
        const getArtData = () => {
            axios
                .get('https://cs2345-db-api.herokuapp.com/art_object/all')
                .then(response => {
                    // successful 
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

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <div id="search-bar">
                <FaSearch id="search-icon" />
                <input
                    type="text"
                    name="search"
                    className="search-input"
                    onChange={handleSearch}
                    placeholder="Search.."
                />
            </div>
            <table id="admin-list-container">
                <thead>
                    <tr key="row-first">
                        {/* 
                            Image
                            Title 
                            description Thematic 
                            description Basic 
                            description Spatial 
                            Country of Origin
                            Accession Number
                            Image Url 
                            Artist Id                       
                            Category Id                 
                            Owner Id                      
                            Geometry Id  
                        */}
                        <th className="row-1 row-Image" key="row-Image">Image</th>
                        <th className="row-2 row-Title" key="row-Title">Title</th>
                        <th className="row-3 row-DescB" key="row-DescB">Basic</th>
                        <th className="row-4 row-DescS" key="row-DescS">Spacial</th>
                        <th className="row-5 row-DescT" key="row-DescT">Thematic</th>
                        <th className="row-6 row-Country" key="row-Country">Origin</th>
                        <th className="row-7 row-Anumb" key="row-Anumb">Accession Number</th>
                        {/* <th className="row-8 row-ArtistID" key="row-ArtistID">Artist ID</th>
                        <th className="row-9 row-CategoryID" key="row-CategoryID">Category ID</th>
                        <th className="row-10 row-OwnerID" key="row-OwnerID">Owner ID</th>
                        <th className="row-11 row-ArtistID" key="row-ArtistID">Geometry ID</th> */}
                        {/* <th className="row-12 row-Edit" key="row-Edit"></th>
                        <th className="row-13 row-Delete" key="row-Delete"></th> */}
                    </tr>
                </thead>
                <tbody>
                {search && art.length > 0 ? art.map(artwork => {
                    return loopObj(artwork)
                }) : art.map(artwork => {    
                    
                    // create an art card for each artwork 
                    return <AdminArtCard art={artwork} key={art.accession_number}/>
                })}
                </tbody>
            </table>
        </div>
    );
}

export default AdminArtList;