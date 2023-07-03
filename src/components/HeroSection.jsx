import '../App.css'
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function Hero() {
  const heroContentRef = useRef(null);
  const heroElement = document.querySelector('#hero-wrapper');
  useEffect(() => {
    const el = heroContentRef.current;
    const animation = gsap.fromTo(el, { opacity: 0 }, {
      opacity: 100, ease: 'power2.inOut', scrollTrigger: {
        trigger: el,
        pin: true,
        start: "center center",
        scrub: true,
        markers: true, 
      }
    })

    return () => {
      animation.kill();
    };
  }, [])
  return (
    <>
      <div id="hero-wrapper">
        <div className="hero-main-content" ref={heroContentRef}>
          <div className="main"><h2>hi, i'm <span>akio allen</span></h2></div>
          <div className="desc"><h2>a software engineer</h2></div>
        </div>
      </div>
    </>
  )
}