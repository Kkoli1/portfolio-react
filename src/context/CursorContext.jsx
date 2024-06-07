/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
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

  const handleHover = (color, width, height, text) => {
    const followCursor = document.querySelector(".cursor-follow");
    followCursor.style.backgroundColor = color;
    followCursor.style.width = width + "px";
    followCursor.style.height = height + "px";
    if (text)
      followCursor.innerHTML =
        "<p style='color:var(--primary); position:absolute; left:50%; bottom: -20px; transform:translateX(-50%);'>" +
        text +
        "</p>";
  };

  const handleLeaveHover = () => {
    const followCursor = document.querySelector(".cursor-follow");
    followCursor.style.backgroundColor = "unset";
    followCursor.style.width = "40px";
    followCursor.style.height = "40px";
    followCursor.removeChild(followCursor.firstChild);
  };

  return (
    <CursorContext.Provider
      value={{
        mousePosition,
        handleHover,
        handleLeaveHover,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  return useContext(CursorContext);
};
