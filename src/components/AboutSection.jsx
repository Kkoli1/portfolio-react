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
        const timeline1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section-pin",
                pin: true,
                start: "center center",
                end: "bottom center",
                scrub: 1,
            },
        });

        if (window.innerWidth < 800) {
            
            timeline1.to(".about-text[data-text='random']", {
                fontSize: "2em",
                x: "-50%",
                y: "130%",
                duration: 3,
            })

            timeline1.to(".about-text[data-text='words']", {
                fontSize: "2em",
                x: "50%",
                y: "100%",
                duration: 3,
            }, 0)

            timeline1.to(".about-text[data-text='mind']", {
                fontSize: "2em",
                x: "-50%",
                y: "80%",
                duration: 3,
            }, 0)

            timeline1.to(".about-img", {
                y: "-60%",
                width: 180,
                height: 250,
                duration: 3,
            }, 0)

            return () => {
                timeline1.kill();
            };
        } else {

            timeline1.fromTo(".about-text[data-text='random']", {
                fontSize: "2.5em",
                
            },{
                fontSize: "4.7em",
                x: "-55%",
                y: "130%",
                duration: 3,
            },0)

            timeline1.fromTo(".about-text[data-text='words']", {
                fontSize: "2.5em",
                
            },{
                fontSize: "4.7em",
                x: "65%",
                y: "100%",
                duration: 3,
            },0)

            timeline1.fromTo(".about-text[data-text='mind']", {
                fontSize: "2.5em", 
            },{
                fontSize: "4.7em",
                x: "-90%",
                y: "60%",
                duration: 3,
            }, 0)

            timeline1.to(".about-img", {
                x: "-5%",
                y: "-75%",
                backgroundSize: "200%",
                backgroundPositionX: "-0.5%",
                backgroundRepeat: "no-repeat",
                width: 330,
                height: 446,
                duration: 3,
            }, 0)

            return () => {
                timeline1.kill();
            };
        }



        // const animation1 = gsap.fromTo(".test-text-1", { x: 1100 }, {
        //     x: 0, y: 400, duration: 3, scrollTrigger: {
        //         trigger: ".test-text-1",
        //         start: "top",
        //         end: "+=500 top",
        //         scrub: 1,
        //         pin: true,
        //     }
        // })

        // const animation2 = gsap.fromTo(".test-text-2", { x: -1100 }, {
        //     x: 0, y: 300, duration: 3, scrollTrigger: {
        //         trigger: ".test-text-2",
        //         start: "top",
        //         end: "bottom +=1000",
        //         pin: true,
        //         scrub: 1,
        //     }
        // })



    }, window.innerWidth);
    return (
        <div id="about-section">
            <div className="about-section-wrapper">
                <div className="about-section-pin" id='about-section-pin'>
                    <div className="about-text" data-text="random">RANDOM</div>
                    <div className="about-text" data-text="words">WORDS</div>
                    <div className="about-text" data-text="mind">IN MIND</div>
                    <div className="about-img"></div>
                </div>
            </div>
        </div>
    )
}