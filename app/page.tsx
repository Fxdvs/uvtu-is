"use client";
import { motion } from "motion/react";
import Image from "next/image";
// Backgrounds;
import Prism from "@/components/ui/Prism";
// UI
import ScrollReveal from "@/components/ui/ScrollReveal";
// Components
import Navbar from "@/components/navbar";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      {/* Intro */}
      <section
        id="Intro"
        className="h-screen w-full relative flex flex-col justify-center items-center border-b border-neutral-950"
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
            scale={3.5}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
            offset={{ y: -50 }}
          />
        </motion.div>

        {/* Content */}
        <div className="size-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-9xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold uppercase"
          >
            UVTU
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-5xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold py-2"
          >
            Budúcnosť bývania vo vašich rukách
          </motion.h2>
        </div>
      </section>
      {/* Hero */}
      <section id="Hero" className="h-screen w-full relative">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
          containerClassName="h-full w-[90%] flex items-center justify-center mx-auto"
          textClassName="text-xl text-neutral-300 whitespace-pre-line"
        >
          Budúcnosť bývania je tu! Jedna platforma, nekonečné možnosti pre váš
          domov. Od automatizácie po bezpečnosť, všetko v dokonalej rovnováhe.
          Vaše zariadenia spolu komunikujú, aby vám uľahčili každý deň. Žite
          pohodlne a efektívne s inteligenciou, ktorá pracuje pre vás.
        </ScrollReveal>
      </section>
      {/* Features */}
      <section
        id="Features"
        className="h-screen w-full relative flex flex-col justify-center items-center border-y border-neutral-950"
      >
        {/* Content */}
        <motion.div
          className="size-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="3drotate"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={3.5}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="size-full absolute flex flex-col justify-center items-center"
        >
          <FeaturesGrid />
        </motion.div>
      </section>
      {/* */}
      <section id="Pricing" className="h-screen w-full flex justify-center items-end">
          <div className="size-max relative flex">
            <Image
              src="/assets/media/desktop-body.png"
              alt="desktop-body"
              width={1000}
              height={1000}
            />
            <div className="h-[80%] w-full absolute p-3">
              <div className="size-full relative flex ">
                {/* Background */}
                <Prism
                  animationType="3drotate"
                  timeScale={0.5}
                  height={3.6}
                  baseWidth={5.0}
                  scale={3.0}
                  hueShift={0}
                  colorFrequency={1}
                  noise={0.15}
                  glow={1}
                />
                {/* Content */}
                <div className="size-full absolute flex items-center justify-center">
                  
                </div>
              </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
}
