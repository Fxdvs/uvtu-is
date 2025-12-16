"use client";
import Navbar from "@/components/navbar";
import FeatureLinks from "@/components/FeatureLinks";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import Prism from "@/components/ui/Prism";

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        className="h-[150vh] w-full relative flex flex-col justify-center items-center"
        id="Intro"
      >
        <motion.div
          className="size-full absolute flex items-center justify-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="3drotate"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={1.5}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
            suspendWhenOffscreen={true}
          />
        </motion.div>
        <FeatureLinks />
      </section>
      <Footer />
    </>
  );
}
