
import '../App.css'
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function RightPillar() {
    const rightRef = useRef(null);
    const heroElement = document.querySelector('#hero-wrapper');
    useEffect(() => {
        const el = rightRef.current;
        gsap.fromTo(el, {xPercent: 1100}, {xPercent: 0, duration: 1.5, ease: 'power2.inOut', scrollTrigger: {
            trigger: heroElement,
            start: 'center -300',
            scrub: 1,
        }})
    }, [])
    return (
        <div className="pillar" id='right-pillar' ref={rightRef}>
            <p>akioallencortes@gmail.com</p>
            <div className="vertical-line"></div>
        </div>
    )
}