import '../App.css'
import gsap from 'gsap';
import { useEffect } from 'react';
export default function LoadingScreen() {

    useEffect(() => {
        const loadingTimeline = gsap.timeline();
        const body = document.querySelector("body");

        loadingTimeline.to(body, {
            overflowY: "hidden",
            height: "100%",
        })

        loadingTimeline.to(".loading-text", {
            duration: 0.1,
            stagger: 0.1, 
            opacity: 1,
            ease: 'power2.inOut',
        })
        
        loadingTimeline.to(".loading-text", {
            delay: 1,
            y: -300,
            stagger: 0.1,
            duration: 0.1,
            opacity: 0,
            ease: 'power2.inOut',
        })

        loadingTimeline.to(".loading-strip", {
            y: "-100%",
            duration: 1,
            stagger: 0.1,
        })

        loadingTimeline.to(body, {
            overflowY: "unset",
            height: "unset",
        })

        loadingTimeline.to(".loading-text", {
            display: "none", 
        })
        
        loadingTimeline.to(".loading-strip", {
            display: "none", 
        })

    }, []);

    return (
        <div className="loading-wrapper">
            <div className="loading-strip left"></div>
            <div className="loading-strip mid">
                <div className="loading-text">h</div>
                <div className="loading-text">e</div>
                <div className="loading-text">l</div>
                <div className="loading-text">l</div>
                <div className="loading-text">o</div>
                <div className="loading-text">!</div></div>
            <div className="loading-strip right"></div>
        </div>
    )
}