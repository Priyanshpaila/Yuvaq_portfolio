"use client";

import {
  Cloud,
  Lock,
  Zap,
  BarChart3,
  Bot,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const modules = [
  {
    title: "Cloud Integration",
    description:
      "Seamless multi-region cloud sync, container orchestration, and real-time IoT data pipelines.",
    icon: Cloud,
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Security",
    description:
      "Zero-trust architecture with enterprise-grade encryption, SSO, and audit-ready compliance.",
    icon: Lock,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Performance",
    description:
      "Ultra-fast query execution, AI caching, and distributed microservices optimized for scale.",
    icon: Zap,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Analytics",
    description:
      "Unified analytics layer with predictive metrics, KPI dashboards, and anomaly detection.",
    icon: BarChart3,
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "AI Integration",
    description:
      "Seamlessly embed ML models, automate workflows, and leverage generative intelligence.",
    icon: Bot,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Customization",
    description:
      "Fully modular design with API-first extensibility, drag-and-drop UI editors, and no-code logic.",
    icon: Settings,
    gradient: "from-orange-500 to-cyan-500",
  },
];

export default function Modules() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      id="modules"
      className="relative py-32 px-4 sm:px-8 lg:px-20 overflow-hidden bg-transparent"
    >
      {/* Animated Background Glow Layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[5%] w-[45rem] h-[45rem] bg-cyan-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[5%] right-[5%] w-[35rem] h-[35rem] bg-purple-600/10 blur-[140px] rounded-full" />

        {/* Orbital Animated Lights */}
        <motion.div
          className="absolute top-[20%] right-[30%] w-32 h-32 bg-cyan-400/20 blur-3xl rounded-full"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[25%] w-40 h-40 bg-purple-400/15 blur-3xl rounded-full"
          animate={{
            x: [0, -25, 0],
            y: [0, 35, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Sparkle Accent */}
      <motion.div
        className="absolute top-12 right-20 opacity-60"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles
          size={44}
          className="text-cyan-400/70 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4"
        >
          Powerful{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Solutions
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Our intelligent ecosystem of modules empowers enterprises with seamless
          automation, real-time insights, and cross-industry scalability — built
          to evolve with your operations.
        </motion.p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {modules.map((module, idx) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 70,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  boxShadow:
                    "0 0 30px rgba(6,182,212,0.3), 0 0 60px rgba(59,130,246,0.15)",
                  transition: { type: "spring", stiffness: 180 },
                }}
                className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-slate-800/40 to-slate-900/70 border border-slate-700/40 hover:border-cyan-400/50 transition-all duration-400"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-lg transition-opacity duration-500" />

                <div className="relative rounded-2xl bg-slate-900/70 backdrop-blur-xl p-8 h-full flex flex-col items-start">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${module.gradient} shadow-lg shadow-black/30 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {module.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {module.description}
                  </p>

                  <motion.div
                    className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r ${module.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + idx * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
