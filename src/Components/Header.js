import React from "react";
import './Header.css'
function Header () {
    return (
        <header>
            <div className="nav-container">
             <div>
            <p>CAMPUSPAY</p>
            </div>
            <div>
                <ul className="nav-items">
                    <li> <a href="#Home">Home</a> </li>
                    <li><a href="#Solutions">Solutions</a></li>
                    <li><a href="#Resources">Resources</a></li>
                    <li><a href="#Contact Us">Contact Us</a></li>
                </ul>
            </div>
            <div className="nav-buttons">
                <button>Sign Up</button>
                <button>Get Started</button>
            </div>
            </div>
        </header>
    );
}

export default Header;