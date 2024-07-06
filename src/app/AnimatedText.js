'use client'
import React, { useState, useEffect } from "react";

const AnimatedText = ({ children }) => {
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateOut(true);
      setTimeout(() => {
        setAnimateOut(false);
      }, 500); // Adjust this timeout as needed
    }, 2000); // Adjust the interval for changing variants

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative ${animateOut ? 'slide-out' : 'slide-in'}`}
      onAnimationEnd={() => setAnimateOut(false)}
    >
      {children}
    </div>
  );
};

export default AnimatedText;
