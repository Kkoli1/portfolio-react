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
        const timeline1 = gsap.timeline();

        timeline1.from(".about-text[data-text='random']", {
            
            color: "red",
            duration: 3,
        })
        const animation1 = gsap.fromTo(".test-text-1", { x: 1100 }, {
            x: 0, y: 400,duration: 3, scrollTrigger: {
                trigger: ".test-text-1",
                start: "top",
                end: "+=500 top",
                scrub: 1,
                pin: true,
            }
        })

        const animation2 = gsap.fromTo(".test-text-2", { x: -1100 }, {
            x: 0, y: 300,duration: 3, scrollTrigger: {
                trigger: ".test-text-2",
                start: "top",
                end: "bottom +=1000",
                pin: true,
                scrub: 1,
            }
        })

        return () => {
            timeline1.kill();
            animation1.kill();
            animation2.kill();
        };

    }, []);
    return (
        <div id="about-section">
            <div className="about-section-wrapper">
                <div className="about-section-pin">
                    <div className="about-text" data-text="random">RANDOM</div>
                    <div className="about-text" data-text="words">WORDS</div>
                    <div className="about-text" data-text="in mind">IN MIND</div>
                    <div className="about-img"></div>
                    <img src="assets/kio-img.png" alt="" />
                </div>
            </div>
        </div>
    )
}