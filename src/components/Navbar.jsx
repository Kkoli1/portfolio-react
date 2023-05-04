import { useState } from 'react'
import './App.css'

function Navbar() {

    return (
        <>
            <div className="navbar-wrapper">
                <div className="row-w-padding">
                    <a href="" className="logo">
                        <h1>ak.io</h1>
                    </a>
                    <div className="links">
                        <a href="" className="link" id="about"><h3>abt</h3></a>
                        <a href="" className="link" id="experience"><h3>exp</h3></a>
                        <a href="" className="link" id="projects"><h3>proj</h3></a>
                        <div className="toggle-theme"><h3>dark</h3></div>
                    </div>
                    <div class="hamburger-menu">
                        <div class="hamburger-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Navbar