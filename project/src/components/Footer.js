import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
    return(
        <div className="footer">
            <Link to="/Admin" className="footer-link">
                <p className="footer-text">Admin Login</p>
                </Link>
        </div>
    )
}
export default Footer