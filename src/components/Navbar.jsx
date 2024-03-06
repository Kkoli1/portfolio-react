import { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //     const onMouseMove = (e) => {
  //         const { clientX, clientY } = e;
  //         setMousePosition({ x: clientX, y: clientY });
  //     };

  //     window.addEventListener('mousemove', onMouseMove);

  //     return () => {
  //         window.removeEventListener('mousemove', onMouseMove);
  //     };
  // }, []);

  // useEffect(() => {
  //     const { x, y } = mousePosition;
  //     gsap.to('.logo', {
  //         x,
  //         y,
  //         duration: 0.3,
  //     });

  // }, [mousePosition]);

  useEffect(() => {
    const heroElement = document.querySelector(".about-section-pin-wrapper");

    // GSAP Animation for the navbar
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

    // Clean up by removing the event listeners when the component unmounts
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
      <div className="navbar-wrapper">
        <div className="row-w-padding">
          <a href="" className="logo">
            <h1>kio</h1>
          </a>
          <div className="links">
            <a
              href="#about-section-pin"
              className="hoverable nav-item link"
              id="about"
            >
              <h3>abt</h3>
            </a>
            <a href="" className="hoverable nav-item link" id="experience">
              <h3>exp</h3>
            </a>
            <a href="" className="hoverable nav-item link" id="projects">
              <h3>proj</h3>
            </a>
            <div className="hoverable nav-item toggle-theme">
              <h3>dark</h3>
            </div>
          </div>
          <div className="hamburger-menu">
            <div className="hamburger-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
