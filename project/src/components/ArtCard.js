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
                    <h2 id="flip-title">{art.title}</h2>
                    <div id="flip-text">
                        <p><strong>Artist</strong> - {art.artist}</p>
                        {/* <p><strong>Medium and Support</strong> - {art.medium_support}</p>
                        <p><strong>Type</strong> - {art.type}</p> */}
                        <p><strong>Basic Description</strong> - {art.description_basic}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtCard;