 import React from 'react';
 
 function AdminArtCard({ art, photo }) {
    return (
        <div className="admin-card">
            <img src={photo} alt={`${art.title} by ${art.artist}`} className="admin-photo"/>
            <div className="admin-text-container">
                <h2>{art.title}</h2>
                <h3>{art.artist}</h3>
                <p>{art.creation_date}</p>
                <p>{art.type}; {art.medium_support}</p>
                <p>{art.credit_line}</p>
                <p>{art.description}</p>
                <p>{art.accession_number}</p>
            </div>
        </div>
    );
 }
 
 export default AdminArtCard;