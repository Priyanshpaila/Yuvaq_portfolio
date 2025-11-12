import React, { useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Modules from "./components/Modules"
import Features from "./components/Features"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#020617] via-[#050b1a] to-[#000] text-white overflow-x-hidden">
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <Hero />
        <About />
        <Modules />
        <Features />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
