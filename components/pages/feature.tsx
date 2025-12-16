"use client";
import { motion } from "motion/react";

// UI
import Prism from "@/components/ui/Prism";
// Components
import Navbar from "@/components/navbar";

interface FeatureProps {
  title: string;
  text: string;
  url: string;
}

export default function Feature(feature: FeatureProps) {
  return (
    <>
      <section
        id={feature.url}
        className="h-[80vh] w-full relative flex flex-col items-center border-b border-neutral-950"
      >
        {/* Navbar */}
        <Navbar />
        {/* Background */}
        <motion.div
          className="size-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={4}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
          />
        </motion.div>
        {/* Content */}
        <div className="size-full absolute flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-8xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold uppercase"
          >
            {feature.title}
          </motion.h1>
        </div>
      </section>
      <section
        id="About"
        className="h-[75vh] w-full relative flex flex-col justify-center items-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[90%] text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-400 text-3xl leading-11 whitespace-pre-line"
        >
          {feature.text}
        </motion.p>
      </section>
    </>
  );
}
