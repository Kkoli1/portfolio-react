import { useEffect } from "react";
import { gsap } from "gsap";
import "../App.css";
import { useCursor } from "../context/CursorContext";

const Cursor = () => {
  const { mousePosition } = useCursor();

  useEffect(() => {
    const { x, y } = mousePosition;
    gsap.to(".cursor-follow", {
      x,
      y,
      duration: 0.3,
    });

    const mainCursor = document.querySelector(".cursor-main");
    mainCursor.style.transform = `translate(${x}px, ${y}px)`;
  }, [mousePosition]);

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
