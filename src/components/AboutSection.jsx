import '../App.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
export default function About() {
    const text1 = document.querySelector(".test-text-1");
    const text2 = document.querySelector(".test-text-2");
    // useEffect(() => {

    //     gsap.fromTo(text1, { rotate: 0, }, { rotate: 360, duration: 3, marker:true});
    //     gsap.fromTo(text2, { rotate: 0, }, { rotate: 360, duration: 3, });

    // }, [])

    useEffect(() => {

        const animation1 = gsap.fromTo(".test-text-1", { x: 1100 }, {
            x: 0, y: 700,duration: 3, scrollTrigger: {
                trigger: ".test-text-1",
                start: "top",
                end: "+=500",
                scrub: 1,
                pin: true,
                markers: true,
            }
        })

        const animation2 = gsap.fromTo(".test-text-2", { x: -1100 }, {
            x: 0, y: 500,duration: 3, scrollTrigger: {
                trigger: ".test-text-2",
                start: "top",
                end: "+=500",
                pin: true,
                scrub: 1,
            }
        })

        return () => {
            animation1.kill();
            animation2.kill();
        };

    }, []);
    return (
        <div id="about-section">
            <div className="about-section-wrapper">
                <div className="test-text-1">HELLO</div>
                <div className="test-text-2">WORLD</div>
            </div>
        </div>
    )
}