"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";

import Logo from "./logo";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  
  useEffect(() => {
    if (!nav) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  function handleNavbar() {
    setNav(!nav);
    document.body.classList.toggle("overflow-hidden");
  }

  function handleRedirect(url: string) {
    if (window.location.pathname == url) {
      handleNavbar();
    }
  }
  return (
    <>
      <div className="h-12 w-full flex justify-center items-center fixed top-6 z-9999">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-[80%] h-12 flex justify-between items-center mx-auto text-neutral-100 bg-neutral-50/10 border border-neutral-50/5 backdrop-blur-lg px-7 rounded-3xl"
        >
          <div className="size-full flex justify-start items-center">
            <Link href="/" rel="noopener noreferrer">
              <Logo className="text-neutral-100 size-5" />
            </Link>
          </div>
          <div className="size-full flex justify-end items-center font-open-sans text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer hover:text-neutral-300 transition-all duration-150"
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
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            exit={{ opacity: 0 }}
            className="top-0 left-0 size-full bg-neutral-50/10 backdrop-blur-3xl text-neutral-100 fixed z-9999 flex flex-col justify-center items-center"
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
                className="text-9xl font-thin uppercase hover:text-neutral-300 transition-all duration-300"
                onClick={() => handleRedirect("/")}
              >
                uvtu
              </Link>
              <Link
                href="/features"
                rel="noopener noreferrer"
                className="text-9xl font-thin uppercase hover:text-neutral-300 transition-all duration-300"
                onClick={() => handleRedirect("/features")}
              >
                Funkcie
              </Link>
              <Link
                href="/pricing"
                rel="noopener noreferrer"
                className="text-9xl font-thin uppercase hover:text-neutral-300 transition-all duration-300"
                onClick={() => handleRedirect("/pricing")}
              >
                cenník
              </Link>
              <Link
                href="/about"
                rel="noopener noreferrer"
                className="text-9xl font-thin uppercase hover:text-neutral-300 transition-all duration-300"
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
