
import '../App.css'
import gsap from 'gsap';
import { useEffect } from 'react';

export default function RightPillar() {

    useEffect(() => {
        const heroElement = document.querySelector('.about-section-pin-wrapper');

        gsap.fromTo("#right-pillar", { xPercent: 1100, visibility: "hidden" }, {
            xPercent: 0, duration: 1, visibility: "visible", scrollTrigger: {
                trigger: heroElement,
                start: "-100px top",
                end: "top top",
                scrub: 1,
            }
        })

    }, []);

    return (
        <div className="pillar" id='right-pillar'>
            <p>akioallencortes@gmail.com</p>
            <div className="vertical-line"></div>
        </div>
    )
}