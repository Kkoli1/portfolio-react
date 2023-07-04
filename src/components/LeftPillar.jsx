
import '../App.css'
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function LeftPillar() {
    const leftRef = useRef(null);
    const heroElement = document.querySelector('#hero-wrapper');
    useEffect(() => {
        const el = leftRef.current;
        gsap.fromTo(el, {xPercent: -600}, {xPercent: 0, duration: 1.2, scrollTrigger: {
            trigger: heroElement,
            start: 'center -300',
            scrub: 1,
        }})
    }, [])
    return (
        <div className="pillar" id='left-pillar' ref={leftRef}>
            <div className="linkedin-img">
                <img src="assets/linkedin-img.png" alt="" srcset="" />
            </div>
            <div className="github-img">
                <img src="assets/github-img.png" alt="" srcset="" />
            </div>
            <div className="vertical-line"></div>
        </div>
    )
}