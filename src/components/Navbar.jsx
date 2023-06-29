
import '../App.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useRef, useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
    const navRef = useRef(null);
    const heroElement = document.querySelector('#hero-wrapper');
    useEffect(() => {
        const el = navRef.current;
        gsap.fromTo(el, {yPercent: -100}, {yPercent: 0, duration: 1, scrollTrigger: {
            trigger: heroElement,
            start: 'top',
            scrub: true,
        }})
    }, [])
    return (
        <>
            <div className="navbar-wrapper" ref={navRef}>
                <div className="row-w-padding">
                    <a href="" className="logo">
                        <h1>kio</h1>
                    </a>
                    <div className="links">
                        <a href="" className="nav-item link" id="about"><h3>abt</h3></a>
                        <a href="" className="nav-item link" id="experience"><h3>exp</h3></a>
                        <a href="" className="nav-item link" id="projects"><h3>proj</h3></a>
                        <div className="nav-item toggle-theme"><h3>dark</h3></div>
                    </div>
                    <div class="hamburger-menu">
                        <div class="hamburger-bar"></div>
                    </div>
                </div>
            </div>
        </>
    )
}