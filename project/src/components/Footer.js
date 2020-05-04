import React, {useState, useEffect} from 'react';

function Footer() {
    // hook keeps track of token status (if token exists)
    const [isloggedIn, setLogin] = useState(false);

    // check for token  
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setLogin(true)
        }
    }, []); 

    return(
        <div className="footer">
            <div className="footer-content">
            {!isloggedIn ?<a href="/Admin" className="footer-link">
                <p className="footer-text">Admin Login</p>
                </a>
                : <a href="/" onClick={() => {localStorage.removeItem("token"); setLogin(false); return "hello"}}
                className="footer-link">
                    <p className="footer-text">Logout</p>
                </a>}
            </div>
        </div>
    )
}
export default Footer