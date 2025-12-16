"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import Prism from "@/components/ui/Prism";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        className="h-[150vh] w-full relative flex flex-col justify-center items-center"
        id="Intro"
      >
        <motion.div
          className="size-full absolute flex items-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Prism
            animationType="hover"
            timeScale={0.5}
            height={3.6}
            baseWidth={6.0}
            scale={2.5}
            hueShift={0}
            colorFrequency={1}
            noise={0.1}
            glow={1}
            suspendWhenOffscreen={true}
            offset={{ y: -400 }}
          />
        </motion.div>
        <div className="h-min w-full z-0 gap-y-16 flex flex-col items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-x-8 absolute z-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-96 text-neutral-50/10"
              viewBox="0 0 16 16"
            >
              <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-96 text-neutral-50/10"
              viewBox="0 0 16 16"
            >
              <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.2.2 0 0 0 .054-.06.18.18 0 0 0-.002-.183L8.12 2.073a.15.15 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="size-96 text-neutral-50/10"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z"
              />
            </svg>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="text-7xl text-neutral-100 font-semibold uppercase text-center leading-24"
          >
           Za každým riešením stojí tím<br/>ktorý rozumie technológiám aj ľuďom
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="w-[90%] h-min grid grid-cols-4 grid-rows-1 z-10 items-center"
          >
            <div className="size-max flex flex-col mx-auto items-center">
              <Image
                src="/assets/team/stefan.jpg"
                alt="uvtu"
                height={500}
                width={500}
                className="size-64 rounded-full mb-5"
              ></Image>
              <h1 className="text-neutral-100 text-3xl">Štefan Tisucký</h1>
              <p className="text-neutral-200 text-lg font-semibold">
                CEO, Mastermind
              </p>
            </div>
            <div className="size-max flex flex-col mx-auto items-center">
              <Image
                src="/assets/team/markus.jpg"
                alt="uvtu"
                height={500}
                width={500}
                className="size-64 rounded-full mb-5"
              ></Image>
              <h1 className="text-neutral-100 text-3xl">Markus Jozef Tirol</h1>
              <p className="text-neutral-300 text-lg font-semibold">CTO</p>
            </div>
            <div className="size-max flex flex-col mx-auto items-center">
              <Image
                src="/assets/team/veronika.jpg"
                alt="uvtu"
                height={500}
                width={500}
                className="size-64 rounded-full mb-5"
              ></Image>
              <h1 className="text-neutral-100 text-3xl">Veronika Kaiserová</h1>
              <p className="text-neutral-300 text-lg font-semibold">
                Lead Designer, UI/UX
              </p>
            </div>
            <div className="size-max flex flex-col mx-auto items-center">
              <Image
                src="/assets/team/laco.jpg"
                alt="uvtu"
                height={500}
                width={500}
                className="size-64 rounded-full mb-5"
              ></Image>
              <h1 className="text-neutral-100 text-3xl">Ladislav Spevák</h1>
              <p className="text-neutral-300 text-lg font-semibold">
                Lead Developer
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
