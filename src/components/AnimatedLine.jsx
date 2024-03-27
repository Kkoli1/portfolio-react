import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import "../App.css";
gsap.registerPlugin(ScrollTrigger);

export default function AnimatedLine() {
  useEffect(() => {
    const showLine = gsap.timeline();

    showLine.to(".line-hide", {
      height: "0%",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".animated-line-container",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="animated-line-container">
      <div className="line-hide"></div>
      <div className="animated-line"></div>
    </div>
  );
}
