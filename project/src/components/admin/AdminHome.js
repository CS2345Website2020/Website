import React from 'react';
import AdminArtList from './AdminArtList';

function AdminHome(props) {
    return (
        <div>
            <h1>Welcome, Admin!</h1>
            <div>
                <AdminArtList />
            </div>
        </div>
    );
}

export default AdminHome;