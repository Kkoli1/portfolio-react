import "../App.css";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const { x, y } = mousePosition;
    gsap.to(".cursor-follow", {
      x,
      y,
      duration: 0.3,
    });

    // Update the position of the main cursor (cursor-main) element
    const mainCursor = document.querySelector(".cursor-main");
    mainCursor.style.transform = `translate(${x}px, ${y}px)`;
  }, [mousePosition]);

  // Function to handle hover event for .nav-item
  const handleNavHover = () => {
    const followCursor = document.querySelector(".cursor-follow");
    followCursor.style.backgroundColor = "#FFFFE3"; // Change the background color here
    followCursor.style.width = "80px";
    followCursor.style.height = "80px";
  };

  const handleNavLogoHover = () => {
    const followCursor = document.querySelector(".cursor-follow");
    followCursor.style.backgroundColor = "#FFFFE3"; // Change the background color here
    followCursor.style.width = "100px";
    followCursor.style.height = "100px";
  };

  // Function to handle mouse leave event for .nav-item
  const handleLeaveHover = () => {
    const followCursor = document.querySelector(".cursor-follow");
    followCursor.style.backgroundColor = "unset"; // Reset the background color when not hovering
    followCursor.style.width = "40px";
    followCursor.style.height = "40px";
  };

  useEffect(() => {
    const logo = document.querySelector(".logo");
    if (logo != null) {
      logo.addEventListener("mouseenter", handleNavLogoHover);
      logo.addEventListener("mouseleave", handleLeaveHover);
    }

    const hoverables = document.querySelectorAll(".hoverable");
    hoverables.forEach((hoverable) => {
      if (!hoverable.classList.contains("letter")) {
        hoverable.addEventListener("mouseenter", handleNavHover);
        hoverable.addEventListener("mouseleave", handleLeaveHover);
      }
    });

    // Clean up by removing the event listeners when the component unmounts
    return () => {
      hoverables.forEach((hoverable) => {
        hoverable.removeEventListener("mouseenter", handleNavHover);
        hoverable.removeEventListener("mouseleave", handleLeaveHover);
        logo.removeEventListener("mouseenter", handleNavHover);
        logo.removeEventListener("mouseleave", handleLeaveHover);
      });
    };
  }, [mousePosition]);

  // useEffect(() => {
  //   const logo = document.getElementsByClassName('.logo');
  //   if(logo)
  //     logo.addEventListener('mouseenter', handleNavHover);

  //   // Clean up by removing the event listeners when the component unmounts
  //   // return () => {
  //   //   logo.removeEventListener('mouseenter', handleNavHover);
  //   // };
  // }, [mousePosition]);

  return (
    <div className="cursor-wrapper">
      <div className="cursor-main" style={{ position: "fixed", zIndex: 9999 }}>
        <div className="cursor-dot"></div>
      </div>
      <div
        className="cursor-follow"
        style={{ position: "fixed", zIndex: 9998 }}
      ></div>
    </div>
  );
};

export default Cursor;
