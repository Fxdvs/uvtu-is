"use client"
import { modules1, modules2 } from "@/components/data/modules";

import Navbar from "@/components/navbar";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { motion } from "motion/react";

export default function Page() {
  return (
    <>
      <section className="h-screen w-full flex flex-col items-center justify-center text-white bg-gradient-to-b from-blue-200 via-blue-100 to-neutral-50" id="Intro">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5  }}
          className="w-[calc(100%-4rem)] h-[calc(100%-4rem)] rounded-4xl border shadow-xs bg-gradient-to-br from-blue-400 via-blue-300 to-neutral-50 relative flex flex-col items-center overflow-hidden"
        >
          <Navbar />
          <div className="absolute bottom-0 left-5">
            <InfiniteMovingCards
              items={modules1}
              direction="right"
              speed="normal"
            />
            <InfiniteMovingCards
              items={modules2}
              direction="left"
              speed="slow"
            />
          </div>
          <div className="absolute top-2/6 left-5 flex flex-col gap-3">
            <h1 className="text-9xl font-thin spacing-wide">UVTU</h1>
            <p className="text-4xl font-thin ml-2.5">Smart home riešenia</p>
          </div>
        </motion.div>
      </section>
      <section className="h-[25vh] w-[calc(100%-4rem)] mx-auto" id="Banners">
        <div className="size-full flex items-center justify-center gap-x-4">
        
        </div>
      </section>
    </>
  );
}
