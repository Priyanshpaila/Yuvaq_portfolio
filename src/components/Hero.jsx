"use client";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 lg:px-20bg-transparent text-center">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[100rem] h-[100rem] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_70%)] blur-3xl"></div>
        <div className="absolute bottom-[-8rem] right-[10%] w-[45rem] h-[45rem] bg-blue-700/20 rounded-full blur-[160px]"></div>
        <div className="absolute top-[10rem] left-[10%] w-[35rem] h-[35rem] bg-purple-600/20 rounded-full blur-[160px]"></div>
      </div>

      {/* Floating 3D Animated Elements */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial="hidden"
        animate="visible"
      >
        {/* Floating Orb 1 */}
        <motion.div
          className="absolute top-[20%] left-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-2xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Orb 2 */}
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-40 h-40 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-400/10 blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 1.05, 1],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Ring (holographic effect) */}
        <motion.div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full blur-[2px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl mx-auto py-20"
      >
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 backdrop-blur-md"
        >
          <Sparkles size={16} className="text-cyan-400" />
          <span className="text-cyan-300 text-sm font-semibold tracking-wide">
            AI & Enterprise Automation
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-6"
        >
          Powering the Future of{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Intelligence
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Delivering cutting-edge AI and automation solutions that integrate seamlessly with
          enterprise workflows — helping industries operate smarter, faster, and more efficiently.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <button
            onClick={() => {
              const section = document.querySelector("#modules");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition flex items-center justify-center gap-2 group"
          >
            Explore Solutions
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
              onClick={() => {
              const section = document.querySelector("#about");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
          className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition">
            Learn More
          </button>
        </motion.div>

        {/* --- Central Illustration Section --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="relative flex justify-center items-center w-full mt-6"
        >
          <div className="relative w-full max-w-[1200px] mx-auto">
            {/* Glowing Halo Behind */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[180px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.25),transparent_80%)] blur-3xl opacity-60"></div>

            {/* Large Illustration */}
            <img
              src="/illustration-tech-core.png"
              alt="Futuristic Tech Core"
              className="w-full h-auto max-h-[720px] object-contain rounded-3xl drop-shadow-[0_0_40px_rgba(14,165,233,0.4)] hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Value Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-3 gap-8 sm:gap-12 text-center max-w-3xl mx-auto mt-20"
        >
          <div>
            <div className="text-4xl font-bold text-cyan-400 mb-1">40%</div>
            <div className="text-gray-400 text-sm">Efficiency Boost</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400 mb-1">3.5×</div>
            <div className="text-gray-400 text-sm">Retention Increase</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-400 mb-1">75%</div>
            <div className="text-gray-400 text-sm">Automation Coverage</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-gradient-to-t from-[#000] to-transparent pointer-events-none" />
    </section>
  );
}
