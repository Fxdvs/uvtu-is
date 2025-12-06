"use client";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className="absolute w-[97%] h-[60%] border border-neutral-950 flex items-center justify-center bottom-41 left-1/2 transform -translate-x-1/2">
        <video
          ref={videoRef}
          src="https://www.pexels.com/sk-sk/download/video/6805181/"
          autoPlay
          loop
          muted
          className="size-full object-fill hover:grayscale-0 transition-all duration-150"
        />
        <div
          className="absolute size-full hover:bg-neutral-50/10 hover:backdrop-blur-lg z-10 flex justify-center items-center group cursor-pointer transition-all duration-300 "
          onClick={toggleFullscreen}
        >
          <svg
            className="size-24 text-neutral-100 opacity-30 group-hover:opacity-70 transition-opacity cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed top-0 left-0 h-screen w-full z-50 bg-neutral-50/10 backdrop-blur-2xl flex justify-center items-center"
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={toggleFullscreen}
          >
            <video
              ref={fullscreenVideoRef}
              src="https://www.pexels.com/sk-sk/download/video/6805181/"
              muted
              autoPlay
              className="h-[80%] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
