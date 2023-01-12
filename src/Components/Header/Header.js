import React from 'react';
import "./header.css";
const Header = () => {
    return (
        <div className='header'>
            <img src='Assets/Group 114.png' alt="" srcSet="" />
            <nav className="nav-bar">
                <ul>
                   <li><a href="#Home">Home</a></li>
                   <li><a href="#Services">Services</a></li>
                   <li><a href="#Prices">Pricing</a></li>
                   <li><a href="#Aboutus">About Us</a></li>
                   <li><a href="#startcompanny">Start a Company</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
