import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";
import React, { useEffect, useRef } from "react";
import Tags from "./Tags";
import PropTypes from "prop-types";
import Separator from "./Separator";
gsap.registerPlugin(ScrollTrigger);

export default function ExperienceItem({ expsObj }) {
  const experienceItemRef = useRef(null);
  const seeMoreButtonRef = useRef(null);
  const seeMoreContentRef = useRef(null);

  const seeMoreButtonTimeline = gsap.timeline({
    paused: true,
    reversed: true,
  });

  useEffect(() => {
    const experienceItemTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: experienceItemRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    window.addEventListener("scroll", () => {
      const element = experienceItemRef.current;
      if (!element) return;

      const isInViewport = ScrollTrigger.isInViewport(element);
      const isBelowViewport =
        element.getBoundingClientRect().bottom > window.innerHeight;

      if (
        experienceItemTimeline.scrollTrigger &&
        !isInViewport &&
        isBelowViewport
      )
        experienceItemTimeline.scrollTrigger.refresh();

      if (!isInViewport && !seeMoreButtonTimeline.reversed() && isBelowViewport)
        seeMoreButtonTimeline.reverse();
    });

    experienceItemTimeline.fromTo(
      experienceItemRef.current,
      {
        opacity: 0,
        rotate: 180,
        scale: 0,
        duration: 0.5,
        ease: "power3.inOut",
      },
      {
        opacity: 1,
        rotate: 0,
        scale: 1,
      }
    );

    seeMoreButtonTimeline
      .to(
        seeMoreButtonRef.current.querySelector("svg"),
        {
          rotate: 180,
          duration: 0.5,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        seeMoreButtonRef.current,
        {
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
          duration: 0.5,
          ease: "power3.inOut",
        },
        0
      )
      .to(seeMoreContentRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power3.inOut",
      });

    return () => {
      experienceItemTimeline.kill();
      seeMoreButtonTimeline.kill();
      window.removeEventListener("scroll", () => {});
    };
  }, [seeMoreButtonTimeline]);

  const handleSeeMoreClick = () => {
    seeMoreButtonTimeline.reversed()
      ? seeMoreButtonTimeline.play()
      : seeMoreButtonTimeline.reverse();
  };

  return (
    <div className="experience-item-container" ref={experienceItemRef}>
      <div className="experience-role-title">{expsObj.roleTitle}</div>
      <div className="experience-date-range">{expsObj.dateRange}</div>
      <div className="experience-see-more-container">
        <div
          className="experience-arrow-button"
          ref={seeMoreButtonRef}
          onClick={handleSeeMoreClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </div>
        <div className="experience-see-more-content" ref={seeMoreContentRef}>
          <div className="experience-upper-container">
            <div className="company-logo">
              <img src={expsObj.companyLogo} alt="onb-logo" />
            </div>
            <div className="company-name">
              <h1>{expsObj.companyName}</h1>
            </div>
          </div>
          <div className="experience-lower-container">
            {expsObj.inner.map((expsInnerObj, idx) => (
              <React.Fragment key={idx}>
                <div
                  key={idx}
                  style={idx !== 0 ? { marginTop: "20px" } : {}}
                  className="experience-inner-item"
                >
                  <div className="inner-role-and-client">
                    <span>{expsInnerObj.innerRole}</span>{" "}
                    {expsInnerObj.innerClient !== "" &&
                      `| ${expsInnerObj.innerClient}`}
                  </div>
                  <ul className="inner-tasks">
                    {expsInnerObj.innerTasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                  <ul className="technologies">
                    {expsInnerObj.tech.map((tech, index) => (
                      <Tags
                        key={index}
                        bgColor={`${index % 2 === 0 ? "primary" : ""}`}
                      >
                        {tech}
                      </Tags>
                    ))}
                  </ul>
                </div>
                {idx !== expsObj.inner.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ExperienceItem.propTypes = {
  expsObj: PropTypes.object.isRequired,
};
