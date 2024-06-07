import "../App.css";
import gsap from "gsap";
import { useEffect } from "react";
import { useCursor } from "../context/CursorContext";

export default function LeftPillar() {
  const { handleHover, handleLeaveHover } = useCursor();

  useEffect(() => {
    const heroElement = document.querySelector(".about-section-pin-wrapper");

    gsap.fromTo(
      "#left-pillar",
      { visibility: "hidden", xPercent: -600 },
      {
        xPercent: 0,
        duration: 1,
        visibility: "visible",
        scrollTrigger: {
          trigger: heroElement,
          start: "-100px top",
          end: "top top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="pillar" id="left-pillar">
      <div
        className="hoverable linkedin-img"
        onMouseEnter={() => {
          handleHover("#FFFFE3", 80, 80, "linkedin");
        }}
        onMouseLeave={handleLeaveHover}
      >
        <img src="assets/linkedin-img.png" alt="" srcSet="" />
      </div>
      <div
        className="hoverable github-img"
        onMouseEnter={() => {
          handleHover("#FFFFE3", 80, 80, "github");
        }}
        onMouseLeave={handleLeaveHover}
      >
        <img src="assets/github-img.png" alt="" srcSet="" />
      </div>
      <div className="vertical-line"></div>
    </div>
  );
}
