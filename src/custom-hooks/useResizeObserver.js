import { useEffect, useState } from "react";

export default function useResizeObserver(ref) {
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref.current) {
          const newHeight = entry.contentRect.height;
          setHeight(newHeight);
        }
      });
    });

    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref]);

  return height;
}
