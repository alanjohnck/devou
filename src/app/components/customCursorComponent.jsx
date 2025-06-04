"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const CustomCursor = ({ projectId }) => {
  const cursorRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.top = `${clientY}px`;
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.opacity = projectId ? 1 : 0;
      }
    };

    const handleClick = () => {
      if (projectId) {
        router.push(`/portfolio/Projects/${projectId}`);
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", handleClick);
    };
  }, [projectId, router]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor text-white text-center flex items-center justify-center"
    >
      <p className="text-sm pointer-events-none">Learn More</p>
    </div>
  );
};

export default CustomCursor;
