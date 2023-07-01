import '../App.css';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function ScrollText() {
    const scrollTextRef = useRef(null);

    useEffect(() => {
        const el = scrollTextRef.current;
        const heroElement = document.querySelector('#hero-wrapper');

        gsap.fromTo(
            el,
            { rotate: 0, opacity: 100 },
            {
                zIndex: -1,
                opacity: 0,
                rotate: 180,
                duration: 1.5,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: heroElement,
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            }
        );

    

    }, []);

    return (
        <>
            <div className="scroll-text" ref={scrollTextRef}>
                <h1><span id='uno'>s</span><span id='dos'>c</span><span id='tres'>r</span><span id='cuatro'>o</span><span id='cinco'>l</span><span id='seis'>l</span></h1>
            </div>
        </>
    );
}