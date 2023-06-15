
import '../App.css';
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function Navbar() {
    // const navRef = useRef(null);
    // useEffect(() => {
    //     const el = navRef.current;
    //     gsap.fromTo(el, {yPercent: -100}, {yPercent: 0, duration: 3})
    // }, [])
    return (
        <>
            <div className="navbar-wrapper" ref={navRef}>
                <div className="row-w-padding">
                    <a href="" className="logo">
                        <h1>kio</h1>
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
