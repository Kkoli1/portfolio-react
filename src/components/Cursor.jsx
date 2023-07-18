import '../App.css';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  useEffect(() => {
    const { x, y } = mousePosition;
    gsap.to('.cursor-follow', {
      x,
      y,
      duration: 0.3,
    });

    // Update the position of the main cursor (cursor-main) element
    const mainCursor = document.querySelector('.cursor-main');
    mainCursor.style.transform = `translate(${x}px, ${y}px)`;
  }, [mousePosition]);

  // Function to handle hover event for .nav-item
  const handleNavHover = () => {
    const followCursor = document.querySelector('.cursor-follow');
    followCursor.style.backgroundColor = '#FFFFE3'; // Change the background color here
    followCursor.style.width = '80px';
    followCursor.style.height = '80px';
  };

  // Function to handle mouse leave event for .nav-item
  const handleNavLeave = () => {
    const followCursor = document.querySelector('.cursor-follow');
    followCursor.style.backgroundColor = 'unset'; // Reset the background color when not hovering
    followCursor.style.width = '40px';
    followCursor.style.height = '40px';
  };

  useEffect(() => {
    // Attach event listeners to each .nav-item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((navItem) => {
      navItem.addEventListener('mouseenter', handleNavHover);
      navItem.addEventListener('mouseleave', handleNavLeave);
    });

    // Clean up by removing the event listeners when the component unmounts
    return () => {
      navItems.forEach((navItem) => {
        navItem.removeEventListener('mouseenter', handleNavHover);
        navItem.removeEventListener('mouseleave', handleNavLeave);
      });
    };
  }, [mousePosition]);

  return (
    <div className="cursor-wrapper">
      <div className="cursor-main" style={{ position: 'fixed', zIndex: 9999 }}>
        <div className="cursor-dot"></div>
      </div>
      <div className="cursor-follow" style={{ position: 'fixed', zIndex: 9998 }}></div>
    </div>
  );
};

export default Cursor;
