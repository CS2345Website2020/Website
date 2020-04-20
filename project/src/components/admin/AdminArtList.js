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
                    placeholder="Search..."
                />
            </div>
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
                {search ? art.map(artwork => {
                    for (let [key, value] of Object.entries(artwork)) {
                        console.log(`key ${key}, value ${value}`);
                        if (key === "id") {
                            continue
                        } else if (value.toLowerCase().includes(search)) {
                            return <AdminArtCard art={artwork} key={art.accession_number}/>
                        }
                    }
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