"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [currentText, setCurrentText] = useState(0);
  const greetings = [
    "Hello",
    "നമസ്കാരം",
    "नमस्ते", // Namaste (Hindi)
    "Hola", // Spanish
    "Bonjour", // French
  ];

  useEffect(() => {
    let animationInterval: NodeJS.Timeout;

    if (currentText < greetings.length - 1) {
      // Only set interval if we haven't reached the end
      animationInterval = setInterval(() => {
        setCurrentText((prevIndex) => prevIndex + 1);
      }, 600);
    } else {
      // When we reach the last greeting, wait a bit then finish loading
      setTimeout(finishLoading, 1500);
    }

    return () => {
      if (animationInterval) clearInterval(animationInterval);
    };
  }, [currentText, finishLoading, greetings.length]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentText}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-white text-xl sm:text-4xl md:text-6xl font-bold"
        >
          {greetings[currentText]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
