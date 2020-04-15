import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// style 
import '../styles/Nav.css';

// image 
import Logo from '../images/bowdoin-logo.png'

function Navigation() {

    // hook keeps track of token status (if token exists)
    const [isloggedIn, setLogin] = useState(false);

    // check for token  
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLogin(true)
        }
    }, []); 

    return (
        <div id="nav-container">
            <div id="title-container">
                <img src={Logo} alt="The word Bowdoin in white text on a black background"/>
                <h2 className="title">CSCI 2345 Project</h2>
            </div>

            {!isloggedIn ? <div id="link-container">
                <div className="link-box">
                    <Link to='/' className="navLink">
                        <div className="borderRight">
                            <h2 className="menuTitle">Home</h2>
                        </div>
                    </Link>
                </div>
                <div className="link-box">
                    <Link to='/Database' className="navLink">
                        <div className="borderRight">
                            <h2 className="menuTitle">Database</h2>
                        </div>
                    </Link>
                </div>
                <div className="link-box">
                    <Link to='/Project-History' className="navLink">
                        <div className="borderRight">
                            <h2 className="menuTitle">History</h2>
                        </div>
                    </Link>
                </div>
                <div className="link-box">
                    <Link to='/About' className="navLink">
                        <h2 className="menuTitle">About</h2>
                    </Link>
                </div>
            </div> : <div id="link-container">
                <div className="link-box">
                    <Link to='/Admin' className="navLink">
                        <div className="borderRight">
                            <h2 className="menuTitle">Home</h2>
                        </div>
                    </Link>
                </div>
                <div className="link-box">
                    <Link to='/' onClick={() => {localStorage.removeItem("token"); setLogin(false); return "hello"}}className="navLink">
                        <div className="borderRight">
                            <h2 className="menuTitle">Logout</h2>
                        </div>
                    </Link>
                </div>
            </div>}
        </div>
    );
}

export default Navigation;