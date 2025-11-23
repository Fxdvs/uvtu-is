"use client";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

import Logo from "./logo";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNavbar() {
    setNav(!nav);
    document.body.classList.toggle("overflow-hidden");
  }

  function handleRedirect(url: string) {
    if(window.location.pathname == url) {
      handleNavbar();
    }
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
          <Link href="/" rel="noopener noreferrer">
            <Logo className="text-neutral-100 size-6" />
          </Link>
        </div>
        <div className="size-full flex justify-end items-center font-open-sans text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 cursor-pointer hover:text-neutral-300 transition-all duration-150"
            onClick={handleNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </motion.div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
              className="size-8 cursor-pointer hover:text-neutral-300  transition-all duration-150 absolute top-6 right-6"
              onClick={handleNavbar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <div className="h-full w-1/2 flex flex-col justify-center text-neutral-100">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-9xl font-thin spacing-wide uppercase hover:text-neutral-400 transition-all duration-150"
                onClick={() => handleRedirect("/")}
              >
                uvtu
              </Link>
              <Link
                href="/features"
                rel="noopener noreferrer"
                className="text-9xl font-thin spacing-wide uppercase hover:text-neutral-400 transition-all duration-150"
                onClick={() => handleRedirect("/features")}
              >
                Funkcie
              </Link>
              <Link
                href="/pricing"
                rel="noopener noreferrer"
                className="text-9xl font-thin spacing-wide uppercase hover:text-neutral-400 transition-all duration-150"
                onClick={() => handleRedirect("/pricing")}
              >
                cenník
              </Link>
              <Link
                href="/about"
                rel="noopener noreferrer"
                className="text-9xl font-thin spacing-wide uppercase hover:text-neutral-400 transition-all duration-150"
                onClick={() => handleRedirect("/pricing")}
              >
                kto sme
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
