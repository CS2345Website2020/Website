import React from 'react';

// styles 
import '../styles/Art.css'


function ArtCard({ art, photo }) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={photo} alt={`${art.title} by ${art.artist}`} className="flip-image"/>
                </div>
                <div className="flip-card-back">
                    <h1>{art.title}</h1>
                    <div id="flip-text">
                        <p><strong>Artist</strong> - {art.artist}</p>
                        <p><strong>Creation Date</strong> - {art.creation_date}</p>
                        <p><strong>Medium and Support</strong> - {art.medium_support}</p>
                        <p><strong>Credit Line</strong>- {art.credit_line}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <div className="art-card">
//             <img src={photo} alt={`${art.title} by ${art.artist}`} className="photo"/>
//             <div className="art-text-container">
//                 <h2>{art.title}</h2>
//                 <h3>{art.artist}</h3>
//                 <p>{art.creation_date}</p>
//                 <p>{art.type}; {art.medium_support}</p>
//                 <p>{art.credit_line}</p>
//                 <p>{art.description}</p>
//                 <p>{art.accession_number}</p>
//             </div>
//         </div>
//         </> 

export default ArtCard;