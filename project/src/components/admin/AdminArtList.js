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
                    placeholder="Search.."
                />
            </div>
            <table id="admin-list-container">
                <thead>
                    <tr key="row-first">
                        {/* <th>Image</th> */}
                        <th className="row-1 row-Anumb" key="row-Anumb">Accession Number</th>
                        <th className="row-2 row-Title" key="row-Title">Title</th>
                        <th className="row-3 row-Artist" key="row-Artist">Artist</th>
                        <th className="row-4 row-Type" key="row-Type">Type</th>
                        <th className="row-5 row-Medium" key="row-Medium">Medium Support</th>
                        <th className="row-6 row-Credit" key="row-Credit">Credit Line</th>
                        <th className="row-7 row-Desc" key="row-Desc">Description</th>
                        <th className="row-8 row-Date" key="row-Date">Creation Date</th>
                        <th className="row-9 row-Edit" key="row-Edit"></th>
                        <th className="row-10 row-Delete" key="row-Delete"></th>
                    </tr>
                </thead>
                <tbody>
                {search ? art.map(artwork => {
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