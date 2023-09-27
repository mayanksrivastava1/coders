import React from 'react'
import './Navbar.css'
const Footer = () => {
    return (
        <>
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
                </ul>
            </div>
            <div className="links link">
                <ul>
                    <li><a href="#">Privacy Policy </a></li>
                    <li><a href="#">Terms and Condition</a></li>
                    
                </ul>
            </div>
            
            
        </nav>
        <div ClassName >
        <p> contact@odyessy.com</p>
      </div>
      </>
    )
}

export default Footer