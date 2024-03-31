import { useEffect, useState } from "react";

export default function useContainerHeights(selector) {
  const [initialHeights, setInitialHeights] = useState([]);
  const [containerHeights, setContainerHeights] = useState([]);
  const [offsetHeights, setOffsetHeights] = useState([]);

  const calculateContainerOffsets = (initialHeights, containerHeights) => {
    // Calculate per element, (containerHeight - initialHeight) / 2
    // it should be calculate on their corresponding index only
    // and set the offsets to offsetHeights
    const offsetHeights = [];
    for (let i = 0; i < initialHeights.length; i++) {
      offsetHeights[i] = (containerHeights[i] - initialHeights[i]) / 2;
    }
    setOffsetHeights(offsetHeights);
  };

  useEffect(() => {
    const handleViewportResize = () => {
      // Update initial heights on viewport resize
      setInitialHeights((prevInitialHeights) => {
        const newInitialHeights = [];
        prevInitialHeights.forEach((height, index) => {
          const container = document.querySelector(selector);
          if (container) {
            newInitialHeights[index] = container.getBoundingClientRect().height;
          }
        });
        return newInitialHeights;
      });
    };

    window.addEventListener("resize", handleViewportResize);

    calculateContainerOffsets(initialHeights, containerHeights);

    return () => {
      window.removeEventListener("resize", handleViewportResize);
    };
  }, [selector, initialHeights, containerHeights]);

  useEffect(() => {
    const containers = document.querySelectorAll(selector);
    if (!containers || containers.length === 0) {
      console.error(
        `No elements matching the query selector '${selector}' found.`
      );
      return;
    }

    const containerHeightsArray = [];
    const initialHeightsArray = [];
    const resizeObservers = [];

    containers.forEach((container, index) => {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.target === container) {
            const newHeight = entry.contentRect.height;
            containerHeightsArray[index] = newHeight;
            setContainerHeights([...containerHeightsArray]);

            // Set initial heights once for each container
            if (!initialHeightsArray[index]) {
              initialHeightsArray[index] = newHeight;
            }
          }
        });
      });

      resizeObserver.observe(container);
      resizeObservers.push(resizeObserver);
    });

    // Set initial heights after all resize observers are set up
    setInitialHeights(initialHeightsArray);

    calculateContainerOffsets(initialHeightsArray, containerHeightsArray);

    return () => {
      resizeObservers.forEach((observer) => observer.disconnect());
    };
  }, [selector]);

  return offsetHeights;
}
