import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.top = `${clientY}px`;
        cursorRef.current.style.left = `${clientX}px`;
      }
    };

    const showCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = 1;
    };

    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = 0;
    };

    // Select target elements
    const targets = document.querySelectorAll(".cursor-target");

    document.addEventListener("mousemove", moveCursor);
    targets.forEach((el) => {
      el.addEventListener("mouseenter", showCursor);
      el.addEventListener("mouseleave", hideCursor);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", showCursor);
        el.removeEventListener("mouseleave", hideCursor);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor text-white text-center flex items-center" >
    <p className="text-sm">Learn More</p>
  </div>;
};

export default CustomCursor;
