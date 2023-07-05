import '../App.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
export default function About() {
    const text1 = document.querySelector(".test-text-1");
    const text2 = document.querySelector(".test-text-2");
    useEffect(() => {

        gsap.fromTo(text1, { rotate: 0, }, { rotate: 360, duration: 3, marker:true});
        gsap.fromTo(text2, { rotate: 0, }, { rotate: 360, duration: 3, });

    }, [])
    return (
        <div id="about-section">
            <div className="about-section-wrapper">
                <div className="test-text-1">HELLO</div>
                <div className="test-text-2">WORLD</div>
            </div>
        </div>
    )
}