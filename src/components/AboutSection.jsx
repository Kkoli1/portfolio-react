/* eslint-disable react-hooks/exhaustive-deps */
import "../App.css";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
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

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section-story-wrapper",
        start: "top center",
      },
    });

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section-story-wrapper",
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
      });

      timeline1.to(
        ".about-text[data-text='words']",
        {
          fontSize: "2em",
          x: "50%",
          y: "100%",
          duration: 3,
        },
        0
      );

      timeline1.to(
        ".about-text[data-text='mind']",
        {
          fontSize: "2em",
          x: "-50%",
          y: "80%",
          duration: 3,
        },
        0
      );

      timeline1.to(
        ".about-img",
        {
          y: "-60%",
          width: 180,
          height: 250,
          duration: 3,
        },
        0
      );

      timeline2.to(
        ".about-section-story-initial-load",
        {
          x: "110%",
          duration: 0.5,
          display: "none",
        },
        0
      );

      timeline2.to(
        ".about-section-story-shadow",
        {
          x: "-5px",
          y: "-5px",
          duration: 0.1,
        },
        0
      );

      timeline2.to(
        ".about-section-story-main-wrapper",
        {
          x: "5px",
          y: "5px",
          duration: 0.1,
        },
        0
      );

      timeline3.to(
        ".about-section-story-shadow",
        {
          x: "80%",
          y: "100%",
          borderTopLeftRadius: "50%",
          opacity: 0.7,
          duration: 3,
        },
        0
      );

      timeline3.to(
        ".about-section-story-main-wrapper",
        {
          x: "-180%",
          y: "10%",
          rotateZ: "90%",
          duration: 3,
          zIndex: 0,
        },
        0
      );

      timeline3.to(
        ".about-section-story-shadow",
        {
          scale: "4",
          duration: 3,
        },
        1
      );

      return () => {
        timeline1.kill();
        timeline3.kill();
      };
    } else {
      timeline1.fromTo(
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
      );

      timeline1.fromTo(
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
      );

      timeline1.fromTo(
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
      );

      timeline1.to(
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

      timeline2.to(
        ".about-section-story-initial-load",
        {
          x: "110%",
          duration: 0.5,
          display: "none",
        },
        0
      );

      timeline2.to(
        ".about-section-story-shadow",
        {
          x: "-5px",
          y: "-5px",
          duration: 0.1,
        },
        0
      );

      timeline2.to(
        ".about-section-story-main-wrapper",
        {
          x: "5px",
          y: "5px",
          duration: 0.1,
        },
        0
      );

      timeline3.to(
        ".about-section-story-shadow",
        {
          x: "80%",
          y: "100%",
          borderTopLeftRadius: "50%",
          opacity: 1,
          duration: 3,
        },
        0
      );

      timeline3.to(
        ".about-section-story-main-wrapper",
        {
          x: "-180%",
          y: "10%",
          rotateZ: "90%",
          duration: 3,
          zIndex: 0,
        },
        0
      );

      timeline3.to(
        ".about-section-story-shadow",
        {
          scale: "4",
          duration: 3,
        },
        1
      );

      return () => {
        timeline1.kill();
        timeline3.kill();
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
          <div className="about-section-shadow-wrapper">
            <div className="about-section-story-shadow"></div>
          </div>
          <div className="about-section-story-main-wrapper">
            <div className="about-section-story-initial-load"></div>
            <h2 className="about-section-story-main-title">abt</h2>
            <p className="about-section-story-main-content">
              I am a student at FEU Institute of Technology, pursuing a B.S. in
              Computer Science with a specialization in Software Engineering. My
              passion lies in designing and developing for web and mobile
              platforms. I am a curious and dedicated learner, always striving
              to excel in my field and stay updated with the latest
              technologies.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
