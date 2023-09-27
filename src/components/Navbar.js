import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./1.png" alt="Logo" />
            </div>
            <div className="links">
                <ul>
                    <li><a href="#">Stay Connected </a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">About US</a></li>
                    <li ><button className='btn'>Sign In</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
