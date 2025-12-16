"use client";
import { GlowingEffect } from "@/components/ui/GlowingEffect";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeatureList from "@/components/FeaturesList";
import PriceButton from "@/components/price-button";
import { motion } from "motion/react";
import Prism from "@/components/ui/Prism";

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        className="h-[150vh] w-full relative flex flex-col justify-center items-center gap-36"
        id="Intro"
      >
        <motion.div
          className="size-full absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={2.2}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
            suspendWhenOffscreen={true}
            offset={{ y: -500 }}
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="text-7xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-400 font-semibold uppercase"
        >
          Investuj do toho, čo má zmysel
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.7 }}
          className="w-full h-min z-10 flex gap-4 justify-center items-center"
        >
          <div className="bg-neutral-50/10 border border-neutral-50/5 h-min w-96 rounded-2xl flex flex-col relative p-5 gap-y-3 shadow shadow-neutral-50/10">
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
            <PriceButton />
          </div>
          <div className="bg-neutral-50/10 border border-neutral-50/5 h-min w-96 rounded-2xl flex flex-col relative p-5 gay-y-3 shadow shadow-neutral-50/10">
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
            <PriceButton />
          </div>
          <div className="bg-neutral-50/10 border border-neutral-50/5 h-min w-96 rounded-2xl flex flex-col relative p-5 gap-y-3">
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
            <PriceButton />
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
