import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 20
      }
    }
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate="default"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 border border-accent flex items-center justify-center hidden md:flex"
      >
        <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
      </motion.div>
      <motion.div
        variants={variants}
        animate="default"
        className="fixed top-0 left-0 w-32 h-32 -ml-12 -mt-12 rounded-full pointer-events-none z-40 bg-accent/10 blur-2xl hidden md:block"
        transition={{ type: "spring", mass: 0.2, stiffness: 200, damping: 30 }}
      />
    </>
  );
};
