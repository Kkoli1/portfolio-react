import { useEffect } from "react";

const useResizeHandler = () => {
  useEffect(() => {
    let lastWidth = window.innerWidth;
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const currentWidth = window.innerWidth;
        if (currentWidth !== lastWidth) {
          window.location.reload();
        }
        lastWidth = currentWidth;
      }, 500);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
};

export default useResizeHandler;
