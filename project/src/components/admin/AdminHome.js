import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/AdminHome.css'
import AdminArtList from './AdminArtList';

function AdminHome() {
    return (
        <div>
            <h1 id="welcome-admin">Welcome, Admin!</h1>
            <div id="admin-home-container">
                <div id="zone-container">
                    <h4>Dashboard</h4>
                    <Link to='/Admin/Add-Artist'>
                            <h4>Add Artist</h4>
                    </Link>
                    <Link to='/Admin/Add-Category'>
                            <h4>Add Category</h4>
                    </Link>
                    <Link to='/Admin/Add-Owner'>
                            <h4>Add Owner</h4>
                    </Link>
                    <Link to='/Admin/Add-Geometry'>
                            <h4>Add Geometry</h4>
                    </Link>
                    <Link to='/Admin/Add-Art'>
                            <h4>Add Artwork</h4>
                    </Link>

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