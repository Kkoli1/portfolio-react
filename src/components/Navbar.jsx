import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Navbar() {
    useEffect(() => {
        const heroElement = document.querySelector('.about-section-pin-wrapper');

        // GSAP Animation for the navbar
        gsap.fromTo(".navbar-wrapper", { yPercent: -100 }, {
            yPercent: 0, duration: 1, scrollTrigger: {
                trigger: heroElement,
                start: "-100px top",
                end: "top top",
                scrub: 1,
            }
        });

        // Function to handle hover event
        const handleHover = (event) => {
            gsap.to(event.target, { scale: 1.2, duration: 0.2 });
        };

        // Function to handle mouse leave event
        const handleMouseLeave = (event) => {
            gsap.to(event.target, { scale: 1, duration: 0.2 });
        };

        // Attach event listeners to each .nav-item
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((navItem) => {
            navItem.addEventListener('mouseenter', handleHover);
            navItem.addEventListener('mouseleave', handleMouseLeave);
        });

        // Clean up by removing the event listeners when the component unmounts
        return () => {
            navItems.forEach((navItem) => {
                navItem.removeEventListener('mouseenter', handleHover);
                navItem.removeEventListener('mouseleave', handleMouseLeave);
            });
        };

    }, []);

    return (
        <>
            <div className="navbar-wrapper">
                <div className="row-w-padding">
                    <a href="" className="logo">
                        <h1>kio</h1>
                    </a>
                    <div className="links">
                        <a href="#about-section-pin" className="nav-item link" id="about"><h3>abt</h3></a>
                        <a href="" className="nav-item link" id="experience"><h3>exp</h3></a>
                        <a href="" className="nav-item link" id="projects"><h3>proj</h3></a>
                        <div className="nav-item toggle-theme"><h3>dark</h3></div>
                    </div>
                    <div className="hamburger-menu">
                        <div className="hamburger-bar"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
