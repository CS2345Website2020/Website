 import React from 'react';
 
 function AdminArtCard({ art }) {
    return (
        <tr>
            {/* <td><img src={photo} alt={`${art.title} by ${art.artist}`} className="admin-photo"/></td> */}
            {/* <div className="admin-text-container"> */}
            <td>{art.accession_number}</td>
            <td>{art.title}</td>
            <td>{art.artist}</td>
            <td>{art.type}</td> 
            <td>{art.medium_support}</td>
            <td>{art.credit_line}</td>
            <td className="desc">{art.description}</td>
            <td>{art.creation_date}</td>
            {/* </div> */}
            {/* <button>Edit</button> */}
        </tr>
    );
 }
 
 export default AdminArtCard;