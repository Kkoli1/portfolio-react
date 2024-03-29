import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceItem() {
  const experienceItemTimeline = gsap.timeline();

  const seeMoreButtonTimeline = gsap.timeline({
    paused: true,
    reversed: true,
  });

  useEffect(() => {
    experienceItemTimeline.fromTo(
      ".experience-item-container",
      {
        opacity: 0,
        rotate: 180,
        scale: 0,
        duration: 0.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".experience-item-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".experience-item-container",
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    seeMoreButtonTimeline
      .to(
        ".experience-arrow-button svg",
        {
          rotate: 180,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        ".experience-arrow-button",
        {
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.5,
          ease: "power3.inOut",
        },
        0
      )
      .to(".experience-see-more-content", {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });
  }, [seeMoreButtonTimeline, experienceItemTimeline]);

  const handleSeeMoreClick = () => {
    seeMoreButtonTimeline.reversed()
      ? seeMoreButtonTimeline.play()
      : seeMoreButtonTimeline.reverse();

    console.log("clicked");
  };

  return (
    <div className="experience-item-container">
      <div className="experience-role-title">Software Engineer</div>
      <div className="experience-date-range">aug 2023 - present</div>
      <div className="experience-see-more-container">
        <div className="experience-arrow-button" onClick={handleSeeMoreClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="experience-see-more-content">
          <div className="experience-upper-container">
            <div className="company-logo">
              <img src="assets/onb-logo.png" alt="" />
            </div>
            <div className="company-name">
              <h1>Orange and Bronze Software Labs</h1>
            </div>
          </div>
          <div className="experience-lower-container">
            <div className="experience-inner-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
