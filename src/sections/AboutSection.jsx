/* eslint-disable react-hooks/exhaustive-deps */
import "../App.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
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

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section-story-wrapper",
        pin: true,
        start: "center center",
        end: "bottom center",
        scrub: 1,
      },
    });

    if (window.innerWidth < 800) {
      timeline1
        .to(".about-text[data-text='random']", {
          fontSize: "2em",
          x: "-50%",
          y: "130%",
          duration: 3,
        })
        .to(
          ".about-text[data-text='words']",
          {
            fontSize: "2em",
            x: "50%",
            y: "100%",
            duration: 3,
          },
          0
        )
        .to(
          ".about-text[data-text='mind']",
          {
            fontSize: "2em",
            x: "-50%",
            y: "80%",
            duration: 3,
          },
          0
        )
        .to(
          ".about-img",
          {
            y: "-60%",
            backgroundSize: "200%",
            backgroundPositionX: "-0.5%",
            width: 180,
            height: 250,
            duration: 3,
          },
          0
        );

      timeline2
        .to(
          ".about-section-story-shadow",
          {
            x: "80%",
            y: "100%",
            borderTopLeftRadius: "50%",
            opacity: 1,
            duration: 3,
          },
          0
        )
        .fromTo(
          ".about-section-story-main-wrapper",
          {
            height: "100%",
          },
          {
            x: "-180%",
            y: "10%",
            rotateZ: "90%",
            duration: 3,
            zIndex: 0,
            width: 0,
            height: 0,
            overflow: "hidden",
          },
          0
        )
        .to(
          ".about-section-story-shadow",
          {
            scale: "4.2",
            duration: 3,
          },
          1
        );
    } else {
      timeline1
        .fromTo(
          ".about-text[data-text='random']",
          {
            fontSize: "2.5em",
          },
          {
            fontSize: "4.7em",
            x: "-55%",
            y: "130%",
            duration: 3,
          },
          0
        )
        .fromTo(
          ".about-text[data-text='words']",
          {
            fontSize: "2.5em",
          },
          {
            fontSize: "4.7em",
            x: "65%",
            y: "100%",
            duration: 3,
          },
          0
        )
        .fromTo(
          ".about-text[data-text='mind']",
          {
            fontSize: "2.5em",
          },
          {
            fontSize: "4.7em",
            x: "-90%",
            y: "60%",
            duration: 3,
          },
          0
        )
        .to(
          ".about-img",
          {
            x: "-5%",
            y: "-75%",
            backgroundSize: "200%",
            backgroundPositionX: "-0.5%",
            backgroundRepeat: "no-repeat",
            width: 330,
            height: 446,
            duration: 3,
          },
          0
        );

      timeline2
        .to(
          ".about-section-story-shadow",
          {
            x: "80%",
            y: "100%",
            borderTopLeftRadius: "50%",
            opacity: 1,
            duration: 2,
          },
          0
        )
        .to(
          ".about-section-story-main-wrapper",
          {
            x: "-180%",
            y: "10%",
            rotateZ: "90%",
            duration: 3,
            zIndex: 0,
            width: 0,
            height: 0,
            overflow: "hidden",
          },
          0
        )
        .to(
          ".about-section-story-shadow",
          {
            scale: "4.2",
            duration: 3,
          },
          1
        );
    }
    return () => {
      timeline1.kill();
      timeline2.kill();
    };
  }, []);
  return (
    <div id="about-section">
      <div className="about-section-pin-wrapper">
        <div className="about-section-pin" id="about-section-pin">
          <div className="about-text" data-text="random">
            RANDOM
          </div>
          <div className="about-text" data-text="words">
            WORDS
          </div>
          <div className="about-text" data-text="mind">
            IN MIND
          </div>
          <div className="about-img"></div>
        </div>
      </div>
      <div className="abt-spacer"></div>
      <div className="about-section-story-wrapper">
        <div className="about-section-story">
          <div className="about-section-story-shadow"></div>
          <div className="about-section-story-main-wrapper">
            <h2 className="about-section-story-main-title">abt</h2>
            <p className="about-section-story-main-content">
              Recent Computer Science graduate from FEU Institute of Technology,
              with specialization in Software Engineering. Driven by curiosity
              and a desire to merge creativity with cutting-edge technology.
              Driven to develop innovative solutions in design & software
              engineering.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
