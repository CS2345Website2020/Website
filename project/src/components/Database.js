import React from 'react';
import ArtList from './ArtList.js'
import DisplayArt from './DisplayArt.js';

function Database() {
    return (
        <div>
            <h1>Database</h1>
            <div>
                <h3>Token Art Piece</h3>
                <DisplayArt />
            </div>
            <div>
                <h3>Art Cards</h3>
                <ArtList />
            </div>
            <h3>Art Locations</h3>
        </div>
    );
}

export default Database;