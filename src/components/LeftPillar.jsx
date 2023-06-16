
import '../App.css'
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function LeftPillar() {
    const leftRef = useRef(null);
    useEffect(() => {
        const el = leftRef.current;
        gsap.fromTo(el, {xPercent: -500}, {xPercent: 0, duration: 1.2})
    }, [])
    return (
        <div className="pillar" id='left-pillar' ref={leftRef}>
            <div className="linkedin-img">
                <img src="public\assets\linkedin.png" alt="" srcset="" />
            </div>
            <div className="github-img">
                <img src="public\assets\github.png" alt="" srcset="" />
            </div>
            <div className="vertical-line"></div>
        </div>
    )
}