import React from 'react';

//style
import "../styles/home.css"


function Home() {
    return (
        <div className="bottom-paddding-home">
        <div className="banner">
        <div className="shadow-boxing">
        <h1 className="welcome">Welcome</h1>
        <h2 className="home-text">To learn more about our project feel free to explore our menu above or 
        check out our virtual tour of the Bowdoin Art Museum below
        </h2>
        </div>
        </div>
        <iframe width="100%" height="880px" title="Gallery Display" src="https://poly.google.com/view/6FGorlIYknW/embed?chrome=min" frameborder="0" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe>
        </div>
    );
}

export default Home;