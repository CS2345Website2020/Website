import React from 'react';
import "../styles/Art.css"

function DisplayArt({ art }) {

    return (
        <div id="display">
            <div id="display-container">
                <div id="img-text">
                    <h2 id="display-title">{art.title}</h2>
                    <h3 id="display-artist">{art.artist}</h3>
                </div>
            </div>
            <div id="display-info-container">
                <div id="display-text">
                    <h2 id="display-title">{art.title}</h2>
                    <h3 id="display-artist">{art.artist}</h3>
                </div>
                <div id="display-info">
                    <p><strong>Accession Number</strong> - {art.accession_number}</p>
                    <p><strong>Type, Medium and Support</strong> - {art.type}, {art.medium_support}</p>
                    <p><strong>Basic Description</strong> - {art.description_basic}</p>
                    <p><strong>Spatial Description</strong> - {art.description_spatial}</p>
                    <p><strong>Thematic Description</strong> - {art.description_thematic}</p>
                </div>
            </div>
        </div>
    );
}

export default DisplayArt;