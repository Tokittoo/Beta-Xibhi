"use client"
import { motion } from "motion/react"
import Intro from "@/components/Intro"
import HallOfFameSection from "@/components/HallOfFame"
import AboutSection from "@/components/WhatIDo"
import SkillsSection from "@/components/Skills"
import Contact from "@/components/Contact"

const Home = () => {
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
  }

  const parentVariant = {
    hidden: {},
    show: {
      transition: {
        duration: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div 
      initial="hidden" 
      animate="show" 
      variants={parentVariant} 
      className="space-y-20"
    >
      <motion.div variants={childVariant}>
        <Intro />
      </motion.div>
      <motion.div variants={childVariant}>
        <HallOfFameSection />
      </motion.div>
      <motion.div variants={childVariant}>
        <AboutSection />
      </motion.div>
      <motion.div variants={childVariant}>
        <SkillsSection />
      </motion.div>
      <motion.div variants={childVariant}>
        <Contact />
      </motion.div>
    </motion.div>
  )
}

export default Home
