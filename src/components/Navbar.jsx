import { useEffect, useState } from "react";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { useCursor } from "../context/CursorContext";

export default function Navbar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const { handleHover, handleLeaveHover } = useCursor();
  const lenis = useLenis();

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

  const handleLogoClick = () => {
    lenis.scrollTo(0);
  };

  const handleLinkClick = (target, offset = 0) => {
    return (event) => {
      event.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY;
        lenis.scrollTo(top + offset);
      }
      toggleNavBarShow();
    };
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
  }, []);

  return (
    <>
      <div className={`navbar-wrapper ${showNavBar ? "open" : ""}`}>
        <div className="row-w-padding">
          <a
            className="hoverable logo"
            onClick={handleLogoClick}
            onMouseEnter={() => handleHover("#FFFFE3", 100, 100, "pogi")}
            onMouseLeave={handleLeaveHover}
          >
            <h1>kio</h1>
          </a>
          <div className={`links ${showNavBar ? "show" : ""}`}>
            <a
              className="hoverable nav-item link"
              id="about"
              onClick={handleLinkClick("#about-section-pin", -300)}
              onMouseEnter={() => handleHover("#FFFFE3", 80, 80, "about")}
              onMouseLeave={handleLeaveHover}
            >
              <h3>abt</h3>
            </a>
            <a
              className="hoverable nav-item link"
              onClick={handleLinkClick("#experience-section", -300)}
              id="experience"
              onMouseEnter={() => handleHover("#FFFFE3", 80, 80, "experience")}
              onMouseLeave={handleLeaveHover}
            >
              <h3>exp</h3>
            </a>
            <a
              href=""
              className="hoverable nav-item link"
              onClick={toggleNavBarShow}
              id="projects"
              onMouseEnter={() => handleHover("#FFFFE3", 80, 80, "projects")}
              onMouseLeave={handleLeaveHover}
            >
              <h3>proj</h3>
            </a>
            <div
              className="hoverable nav-item toggle-theme"
              onMouseEnter={() => handleHover("#FFFFE3", 80, 80, "dark")}
              onMouseLeave={handleLeaveHover}
            >
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
