import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/AdminHome.css'
import AdminArtList from './AdminArtList';

// import {  } from 'react-icons/fa';

function AdminHome(props) {
    return (
        <div>
            <h1 id="welcome-admin">Welcome, Admin!</h1>
            <div id="admin-home-container">
                <div id="zone-container">
                    <Link to='/Admin/Add-Art'>
                            <h4>Add Artwork</h4>
                    </Link>
                    <h4>Artists</h4>
                    <h4>Creation Dates</h4>
                    <h4>Types</h4>
                    <h4>Medium and Support</h4>
                    <h4>Zones</h4>
                    <div id="divider"></div>
                    <div id="zone-bottom">
                        <p>Settings</p>
                        <p>Preferences</p> 
                        <p>Help</p>
                    </div>
                </div>
                <div id="admin-art-container">
                    <AdminArtList />
                </div>
            </div>
        </div>
    );
}

export default AdminHome;