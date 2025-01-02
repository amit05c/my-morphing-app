import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailingDotsRef = useRef([]);

  useEffect(() => {
    const mouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
      }

      // Update trailing dots
      trailingDotsRef.current.forEach((dot, index) => {
        if (dot) {
          dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
          dot.style.opacity = 1 - index * 0.1; // Fade out effect
          dot.style.transitionDelay = `${index * 0.02}s`; // Staggered delay
        }
      });
    };

    window.addEventListener("mousemove", mouseMove);
    document.body.style.cursor = 'none'; // Hide default cursor

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.body.style.cursor = 'auto'; // Restore default cursor
    };
  }, []);

  // Create an array of trailing dots
  const trailingDots = [...Array(4)].map((_, i) => (
    <div
      key={i}
      className="cursor-dot"
      ref={(el) => (trailingDotsRef.current[i] = el)}
    />
  ));

  return (
    <>
      <style>
        {`
          .cursor {
            width: 32px;
            height: 32px;
            background: rgba(255, 255, 255, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 999;
            mix-blend-mode: difference; /* Optional: for a cool effect */
            transition: transform 0.1s ease; /* Smooth movement */
          }
          .cursor-dot {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 999;
            transition: transform 0.5s ease, opacity 0.5s ease; /* Smooth transition */
          }
        `}
      </style>
      <div
        className="cursor"
        ref={cursorRef}
      />
      {trailingDots}
    </>
  );
};

export default CustomCursor;