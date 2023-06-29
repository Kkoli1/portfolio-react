
import '../App.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function ScrollText() {
    const scrollTextRef = useRef(null);
    const heroElement = document.querySelector('#hero-wrapper');
    useEffect(() => {
        const el = scrollTextRef.current;
        gsap.fromTo(el, { rotate: 0, opacity: 100 }, {
            display: 'none', opacity: 0, rotate: 180, duration: 1.5, ease: 'power2.inOut', scrollTrigger: {
                trigger: heroElement,
                start: 'top',
                scrub: true,
            }
        })
    }, [])
    return (
        <>
            <div className="scroll-text" ref={scrollTextRef}>
                <h1>scroll</h1>
            </div>
        </>
    )
}

