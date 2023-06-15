
import '../App.css'
import gsap from 'gsap';
import {useRef, useEffect} from 'react';

export default function RightPillar() {
    const rightRef = useRef(null);
    useEffect(() => {
        const el = rightRef.current;
        gsap.fromTo(el, {xPercent: 1000}, {xPercent: 0, duration: 1.5})
    }, [])
    return (
        <div className="pillar" id='right-pillar' ref={rightRef}>
            <p>akioallencortes@gmail.com</p>
            <div className="vertical-line"></div>
        </div>
    )
}