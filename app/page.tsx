"use client";
import { motion } from "motion/react";
// Backgrounds;
import Prism from "@/components/ui/Prism";
// UI
import ScrollReveal from "@/components/ui/ScrollReveal";
// Components
import Navbar from "@/components/navbar";
import FeaturesGrid from "@/components/FeaturesGrid";
import Footer from "@/components/footer";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import FeatureList from "@/components/FeaturesList";
import Device from "@/components/Device";

export default function Page() {

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <section
        id="Intro"
        className="h-screen w-full relative flex flex-col justify-center items-center border-b border-neutral-950"
      >
        {/* Intro */}

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
            suspendWhenOffscreen={true}
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
            suspendWhenOffscreen={true}
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
      {/* Pricing */}
      <section
        id="Pricing"
        className="h-screen w-full flex justify-center items-center gap-4 relative"
      >
        <div className="bg-neutral-50/10 border border-neutral-50/5 h-[40%] w-96 rounded-2xl flex flex-col relative p-5 gap-y-2 shadow shadow-neutral-50/10">
          <GlowingEffect
            spread={75}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2.5}
          />
          <div className="h-max w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-10 text-neutral-100"
              viewBox="0 0 16 16"
            >
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
            </svg>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold uppercase tracking-wide">
              2599€
            </h1>
          </div>
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold">
            Mini
          </h1>
          <FeatureList type="mini" />
        </div>
        <div className="bg-neutral-50/10 border border-neutral-50/5 h-[50%] w-96 rounded-2xl flex flex-col relative p-5 gap-y-2 shadow shadow-neutral-50/10">
          <GlowingEffect
            spread={75}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2.5}
          />
          <div className="h-max w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-10 text-neutral-100"
              viewBox="0 0 16 16"
            >
              <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.2.2 0 0 0 .054-.06.18.18 0 0 0-.002-.183L8.12 2.073a.15.15 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767z" />
            </svg>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold uppercase tracking-wide">
              4999€
            </h1>
          </div>
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold">
            Home
          </h1>
          <FeatureList type="home" />
        </div>
        <div className="bg-neutral-50/10 border border-neutral-50/5 h-[60%] w-96 rounded-2xl flex flex-col relative p-5 gap-y-2">
          {" "}
          <GlowingEffect
            spread={75}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2.5}
          />
          <div className="h-max w-full flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-10 text-neutral-100"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
              />
            </svg>
            <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold uppercase tracking-wide">
              7499€
            </h1>
          </div>
          <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-300 font-semibold">
            Pro
          </h1>
          <FeatureList type="pro" />
        </div>
      </section>
      {/* About us*/}
      <section className="h-screen w-full flex flex-col justify-center items-center relative">
        <motion.div
          className="size-full absolute border-t border-neutral-950"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="hover"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={2.7}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
            suspendWhenOffscreen={true}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.2 }}
          className="h-full relative flex flex-col justify-end"
        >
          <Device />
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
