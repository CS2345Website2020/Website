import React from 'react';
import '../../styles/AdminHome.css'
import AdminArtList from './AdminArtList';

function AdminHome(props) {
    return (
        <div>
            <h1 id="welcome-admin">Welcome, Admin!</h1>
            <div id="admin-home-container">
                <div id="zone-container">
                    <h4>Add Artwork</h4>
                    <h4>Zone 2</h4>
                    <h4>Zone 3</h4>
                    <h4>Zone 4</h4>
                    <h4>Zone 5</h4>
                    <h4>Zone 6</h4>
                    <div id="zone-bottom">
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
                        <p>hello</p>
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