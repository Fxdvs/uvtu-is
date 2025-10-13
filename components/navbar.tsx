"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNavbar() {
    setNav(!nav);
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.15, delay: 0.3 }}
        className="absolute top-6 w-[97%] flex justify-between h-12"
      >
        <div className="size-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.3}
            stroke="currentColor"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
        </div>
        <div className="size-full flex justify-end items-center font-open-sans text-lg text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-8 p-1 hover:bg-white/5 rounded-sm cursor-pointer transition-all duration-150"
            onClick={handleNavbar}
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </motion.div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 h-full w-full bg-neutral-50 fixed z-1000 flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-neutral-900 absolute top-5 right-5 cursor-pointer"
              onClick={handleNavbar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className="h-full w-1/2 flex flex-col justify-center text-neutral-900">
            <h1 className="text-9xl font-thin spacing-wide uppercase">my</h1>
              <h1 className="text-9xl font-thin spacing-wide uppercase">produkty</h1>
              <h1 className="text-9xl font-thin spacing-wide uppercase">cenník</h1>
              <h1 className="text-9xl font-thin spacing-wide uppercase">kontakt</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
