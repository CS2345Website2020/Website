import React from 'react';

//style
import "../styles/home.css"

import GalleryPhoto from "../images/instruct-delight-2019-2.jpg"

function Home() {
    return (
        <div>
        <div className="banner">
        <div className="shadow-boxing">
        <h1 className="welcome">Welcome</h1>
        <h2 className="home-text">To learn more about our project feel free to explore our menu above or 
        check out our virtual tour of the Bowdoin Art Museum below (whenever it gets implemented)
        </h2>
        </div>
        </div>
        <br></br>
        <img src={GalleryPhoto} className="virtual-tour" alt="Room in art museum showcasing European and American works"></img>
        </div>
    );
}

export default Home;