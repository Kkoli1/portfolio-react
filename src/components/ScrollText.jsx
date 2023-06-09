import '../App.css';
import gsap from 'gsap';
import { useEffect } from 'react';

export default function ScrollText() {

    useEffect(() => {
        const heroElement = document.querySelector('#hero-wrapper');

        // gsap.fromTo(
        //     ".scroll-text",
        //     { rotate: 0, opacity: 100 },
        //     {
        //         zIndex: -1,
        //         opacity: 0,
        //         rotate: 180,
        //         duration: 1.5,
        //         ease: 'power2.inOut',
        //         scrollTrigger: {
        //             trigger: heroElement,
        //             start: "top bottom",
        //             end: "top top",
        //             scrub: true,
        //         },
        //     }
        // );

        gsap.to(
            ".letter",
            {
                y: -1000,
                opacity: 0,
                display: "none",
                rotate: 180,
                duration: 2.5,
                ease: 'power2.inOut',
                stagger: 0.8,
                scrollTrigger: {
                    trigger: heroElement,
                    start: "bottom 190%",
                    end: "bottom",
                    scrub: 1,
                },
            }
        );

        // gsap.to(
        //     ".letter",
        //     {
        //         y: -1000,
        //         opacity: 0,
        //         display: "none",
        //         rotate: 180,
        //         duration: 2.5,
        //         ease: 'power2.inOut',
        //         stagger: 0.8,
        //         scrollTrigger: {
        //             trigger: heroElement,
        //             start: "top top",
        //             end: "bottom top",
        //             scrub: true,
        //         },
        //     }
        // );



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