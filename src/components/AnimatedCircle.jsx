import { useEffect, useState } from "react";
import "../App.css";

export default function AnimatedCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCirclePosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const randomX = Math.floor(Math.random() * viewportWidth);
      const randomY = Math.floor(Math.random() * viewportHeight);

      setPosition({ x: randomX, y: randomY });
    };

    const interval = setInterval(updateCirclePosition, 4000);

    return () => clearInterval(interval);
  }, []);

  const circleStyle = {
    top: `${position.y}px`,
    left: `${position.x}px`,
  };

  return (
    <div
      className="animated-circle-container primary"
      style={circleStyle}
    ></div>
  );
}
