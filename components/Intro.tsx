"use client";
import Image from "next/image";
import { motion } from "motion/react";

const Intro = () => {
  const childVariant = {
    hidden: {
      opacity: 0.5,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  return (
    <section id="intro">
      <motion.div
        initial={"hidden"}
        animate={"show"}
        variants={parentVariant}
        className="p-8 my-4"
      >
        <div className="flex justify-between max-md:flex-col-reverse">
          <motion.div variants={childVariant}>
            <h1 className="text-5xl md:text-7xl font-sans mt-5 font-bold tracking-tight my-2">
              Sibhi
            </h1>
          </motion.div>
          <motion.div
            variants={childVariant}
            className="overflow-hidden rounded-lg w-max h-max shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] border border-zinc-700/70"
          >
            <Image
              src={"/placeholder.svg?height=120&width=120"}
              height={120}
              width={120}
              alt="Krish Profile Image"
            />
          </motion.div>
        </div>
        <motion.p
          variants={childVariant}
          className="text-zinc-700 dark:text-zinc-400 mt-8"
        >
          Started programming at the age of 13, I got a keen interest towards
          Cyber Security and have explored multiple dimensions of it. I
          progressively worked on multiple technologies ranging from software to
          security, which gave me a brief exposure towards the industry. You can
          contact me for a coffee or to get your idea into code or to consult
          for your software, security needs.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Intro;
