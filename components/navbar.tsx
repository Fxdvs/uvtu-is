"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Logo from "./logo";

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
        className="w-[80%] h-12 flex justify-between items-center absolute top-6 mx-auto text-neutral-100 z-9999"
      >
        <div className="size-full flex justify-start items-center">
          <Logo className="text-neutral-100 size-6"/>
        </div>
        <div className="size-full flex justify-end items-center font-open-sans text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth={1.5}
            stroke="currentColor" 
            className="size-8 p-0.5 hover:bg-neutral-100/5 rounded-sm cursor-pointer transition-all duration-150" 
            onClick={handleNavbar}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
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
            className="top-0 left-0 size-full bg-black text-neutral-100 fixed z-9999 flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 p-0.5 hover:bg-neutral-100/5 rounded-sm cursor-pointer transition-all duration-150 absolute top-6 right-6"
              onClick={handleNavbar}
            > 
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className="h-full w-1/2 flex flex-col justify-center text-neutral-100">
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