
import '../App.css'
import gsap from 'gsap';
import { useEffect } from 'react';

export default function LeftPillar() {

    useEffect(() => {
        const heroElement = document.querySelector('.about-section-pin-wrapper');


        gsap.fromTo("#left-pillar", { visibility: "hidden", xPercent: -600 }, {
            xPercent: 0, duration: 1, visibility: "visible",scrollTrigger: {
                trigger: heroElement,
                start: "-100px top",
                end: "top top",
                scrub: 1,
            }
        })

    }, []);

    return (
        <div className="pillar" id='left-pillar'>
            <div className="hoverable linkedin-img">
                <img src="assets/linkedin-img.png" alt="" srcSet="" />
            </div>
            <div className="hoverable github-img">
                <img src="assets/github-img.png" alt="" srcSet="" />
            </div>
            <div className="vertical-line"></div>
        </div>
    )
}