import '../App.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const heroContentRef = useRef(null);
  const heroElement = document.querySelector('#hero-wrapper');
  useEffect(() => {
    const el = heroContentRef.current;
    // const animation = gsap.fromTo(el, { opacity: 0 }, {
    //   opacity: 100, ease: 'power2.inOut', scrollTrigger: {
    //     trigger: el,
    //     pin: true,
    //     start: "center center",
    //     scrub: true,
    //   }
    // })

    // const animation = gsap.fromTo(
    //   ".main-letter", {
    //   translateY:500,
    //   opacity: 0,
    // }, {
    //   translateY: 0,
    //   duration: 2.5,
    //   opacity:100,
    //   ease: 'power2.inOut',
    //   stagger: 0.8,
    //   scrollTrigger: {
    //     trigger: el,
    //     pin: true,
    //     start: "center center",
    //     // end: "top top",
    //     scrub: true,
    //   },
    // }
    // );

    // gsap.fromTo(".desc", {
    //   opacity:0,
    // },{
    //   opacity:100,
    //   duration: 2.5,
    //   ease: 'power2.inOut',
    // })

    // return () => {
    //   animation.kill();
    // };

    ////
    // Create a GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        pin: true,
        start: "center center",
        end: "bottom -500",
        scrub: 1,
      },
    });

    // Add the first animation to the timeline
    timeline.fromTo(
      ".main-letter",
      {
        translateY: 500,
        opacity: 0,
      },
      {
        translateY: 0,
        duration: 2.5,
        opacity: 1,
        ease: 'power2.inOut',
        stagger: 0.8,

      }
    );

    // Add the second animation to the timeline
    timeline.fromTo(
      ".desc",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2.5,
        ease: 'power2.inOut',
      },
    );

    // Return a function to kill the timeline
    return () => {
      timeline.kill();
    };




  }, [])
  return (
    <>
      <div id="hero-wrapper">
        <div className="hero-main-content" ref={heroContentRef}>
          {/* <div className="main"><h2>hi, i'm <span>akio allen</span></h2></div> */}
          <h2><div className="main-letter-container"><div className="main-letter">h</div><div className="main-letter">i</div><div className="main-letter">,</div><div className="letter-spacer"></div><div className="main-letter">i</div><div className="main-letter">'</div><div className="main-letter">m</div><div className="letter-spacer"></div><div className="main-letter name">a</div><div className="main-letter name">k</div><div className="main-letter name">i</div><div className="main-letter name">o</div><div className="letter-spacer"></div><div className="main-letter name">a</div><div className="main-letter name">l</div><div className="main-letter name">l</div><div className="main-letter name">e</div><div className="main-letter name">n</div></div></h2>
          <div className="desc"><h2>a software engineer</h2></div>
        </div>
      </div>
    </>
  )
}