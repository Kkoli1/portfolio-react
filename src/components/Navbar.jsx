import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBarShow = () => {
    if (window.innerWidth > 800) return;
    if (showNavBar) {
      setShowNavBar(false);
      gsap.to("body", { height: "unset", overflowY: "unset" });
    } else {
      setShowNavBar(true);
      gsap.to("body", { height: "100vh", overflowY: "hidden" });
    }
  };

  const handleLogoCLick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const heroElement = document.querySelector(".about-section-pin-wrapper");

    gsap.fromTo(
      ".navbar-wrapper",
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroElement,
          start: "-100px top",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // Function to handle hover event
    const handleHover = (event) => {
      gsap.to(event.target, { scale: 1.2, duration: 0.2 });
    };

    // Function to handle mouse leave event
    const handleMouseLeave = (event) => {
      gsap.to(event.target, { scale: 1, duration: 0.2 });
    };

    // Attach event listeners to each .nav-item
    const hoverables = document.querySelectorAll(".hoverable");
    hoverables.forEach((hoverable) => {
      hoverable.addEventListener("mouseenter", handleHover);
      hoverable.addEventListener("mouseleave", handleMouseLeave);
    });

    const logo = document.querySelector(".logo");
    if (logo != null) {
      logo.addEventListener("mouseenter", handleHover);
      logo.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", handleHover);
        hoverable.removeEventListener("mouseleave", handleMouseLeave);
      });
      logo.removeEventListener("mouseenter", handleHover);
      logo.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className={`navbar-wrapper ${showNavBar ? "open" : ""}`}>
        <div className="row-w-padding">
          <a className="logo" onClick={handleLogoCLick}>
            <h1>kio</h1>
          </a>
          <div className={`links ${showNavBar ? "show" : ""}`}>
            <a
              href="#about-section-pin"
              className="hoverable nav-item link"
              id="about"
              onClick={toggleNavBarShow}
            >
              <h3>abt</h3>
            </a>
            <a
              href="#experience-section"
              className="hoverable nav-item link"
              onClick={toggleNavBarShow}
              id="experience"
            >
              <h3>exp</h3>
            </a>
            <a
              href=""
              className="hoverable nav-item link"
              onClick={toggleNavBarShow}
              id="projects"
            >
              <h3>proj</h3>
            </a>
            <div className="hoverable nav-item toggle-theme">
              <h3>dark</h3>
            </div>
          </div>
          <div
            className={`hamburger-menu ${showNavBar ? "open" : ""}`}
            onClick={toggleNavBarShow}
          >
            <div className="hamburger-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
