"use client";
import { motion, useAnimation } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import CardSwap, { Card } from "./CardSwap";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scale, setScale] = useState(1);
  const controls = useAnimation();

  // Responsive scaling for card swap
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setScale(1.1); // 🔹 Larger on very small screens
      else if (window.innerWidth < 768) setScale(1.0); // 🔹 Slightly larger on small tablets
      else if (window.innerWidth < 1024) setScale(0.95);
      else setScale(1);
      controls.start({ scale, transition: { duration: 0.4, ease: "easeInOut" } });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls, scale]);

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-20 bg-transparent">
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[90rem] h-[90rem] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-[-8rem] right-[10%] w-[40rem] h-[40rem] bg-blue-700/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-[10rem] left-[10%] w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-[160px]"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <motion.div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-[25%] left-[10%] w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[20%] w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-400/10 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 🌠 Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 items-center gap-16 py-16 sm:py-20">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left flex flex-col items-center lg:items-start w-full"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-5 backdrop-blur-md">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-cyan-300 text-sm font-semibold tracking-wide">
              AI & Enterprise Automation
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4 sm:mb-6 max-w-xl">
            Powering the Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Intelligence
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg mb-8 leading-relaxed">
            Delivering cutting-edge AI and automation solutions that integrate seamlessly
            with enterprise workflows — helping industries operate smarter and faster.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
            <button
              onClick={() =>
                document.querySelector("#modules")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              Explore Solutions
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 sm:px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-sm sm:text-base hover:bg-white/20 transition w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 text-center lg:text-left max-w-md w-full">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">40%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Efficiency Boost</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">3.5×</div>
              <div className="text-gray-400 text-xs sm:text-sm">Retention Increase</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-1">75%</div>
              <div className="text-gray-400 text-xs sm:text-sm">Automation Coverage</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Centered & Larger on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full flex justify-center items-center mt-12 lg:mt-0"
        >
          <motion.div
            animate={controls}
            className="relative w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[90%] flex justify-center items-center h-[260px] sm:h-[340px] md:h-[520px] lg:h-[600px]"
          >
            <CardSwap
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src="/kal.png"
                  alt="AI Dashboard"
                  className="w-full h-full object-cover rounded-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(6,182,212,0.25)]"
                />
              </Card>
              <Card>
                <img
                  src="/see.png"
                  alt="Analytics View"
                  className="w-full h-full object-cover rounded-2xl border border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.25)]"
                />
              </Card>
              <Card>
                <img
                  src="/sun.png"
                  alt="Automation Workflow"
                  className="w-full h-full object-cover rounded-2xl border border-purple-500/20 shadow-[0_0_40px_rgba(147,51,234,0.25)]"
                />
              </Card>
            </CardSwap>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#000] to-transparent pointer-events-none" />
    </section>
  );
}
