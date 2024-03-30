import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine() {
  const animatedLineContainer = useRef(null);
  const lineHide = useRef(null);

  useEffect(() => {
    const showLine = gsap.timeline();

    showLine.to(lineHide.current, {
      height: "0%",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: animatedLineContainer.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="animated-line-container" ref={animatedLineContainer}>
      <div className="line-hide" ref={lineHide}></div>
      <div className="animated-line"></div>
    </div>
  );
}
