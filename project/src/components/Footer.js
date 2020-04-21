import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
    return(
        <div className="footer">
            <Link to="/Admin" className="navLink">Admin Login</Link>
        </div>
    )
}
export default Footer