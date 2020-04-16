import React from 'react';
import AdminArtList from './AdminArtList';

function AdminHome(props) {
    return (
        <div id="admin-home-container">
            <h1 id="welcome-admin">Welcome, Admin!</h1>
            <div id="zone-container">
                <h4>Zone 1</h4>
                <h4>Zone 2</h4>
                <h4>Zone 3</h4>
                <h4>Zone 4</h4>
                <h4>Zone 5</h4>
                <h4>Zone 6</h4>
            </div>
            <div id="admin-art-container">
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                {/* <AdminArtList /> */}
            </div>
        </div>
    );
}

export default AdminHome;