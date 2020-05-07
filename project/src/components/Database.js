import React from 'react';
import ArtList from './ArtList.js'
import DisplayArt from './DisplayArt.js';

function Database() {
    return (
        <div className="bottom-padding">
            <h1>Database</h1>
            <div>
                <DisplayArt />
            </div>
            <div>
                <h3 className="data-section-titles">Art on Display</h3>
                <ArtList />
            </div>
        </div>
    );
}

export default Database;