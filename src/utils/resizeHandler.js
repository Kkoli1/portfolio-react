import { useEffect } from "react";

const useResizeHandler = () => {
  useEffect(() => {
    let resizeTimer;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust the delay as needed
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
};

export default useResizeHandler;
