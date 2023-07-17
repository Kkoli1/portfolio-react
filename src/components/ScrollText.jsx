import '../App.css';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function ScrollText() {

    useEffect(() => {
        const heroElement = document.querySelector('#hero-wrapper');

        const scrollTimeline = gsap.timeline({scrollTrigger: {
            trigger: heroElement,
            start: "bottom 190%",
            end: "bottom",
            scrub: 1,
        },})

        scrollTimeline.to(
            ".letter",
            {
                y: -1000,
                opacity: 0,
                rotate: 180,
                duration: 2.5,
                ease: 'power2.inOut',
                stagger: 0.8,
            }
        );

        scrollTimeline.to(".letter", {
            display: "none",
        })

        scrollTimeline.to(".scroll-text", {
            display: "none",
        })

    }, []);

    return (
        <>
            <div className="scroll-text">
                    <div className="letter">s</div>
                    <div className="letter">c</div>
                    <div className="letter">r</div>
                    <div className="letter">o</div>
                    <div className="letter">l</div>
                    <div className="letter">l</div>
            </div>
        </>
    );
}