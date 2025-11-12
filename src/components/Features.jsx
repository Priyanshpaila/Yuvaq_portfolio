"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  CheckCircle,
  BarChart3,
  Clock,
  Cpu,
  Shield,
  Workflow,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "Agile Methodology",
    desc: "Rapid development cycles with continuous client collaboration and iterative improvements to ensure faster go-to-market delivery.",
    icon: Workflow,
  },
  {
    title: "Modular Architecture",
    desc: "Scalable, future-proof systems that grow with your enterprise, enabling flexible updates and seamless integrations.",
    icon: Cpu,
  },
  {
    title: "Real-Time Automation",
    desc: "Eliminate manual workflows with intelligent automation, IoT connectivity, and unified data synchronization across modules.",
    icon: Clock,
  },
  {
    title: "Data-Driven Insights",
    desc: "Unified analytics dashboards with predictive insights and real-time KPIs for confident business decisions.",
    icon: BarChart3,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "End-to-end encryption, role-based access control, and detailed audit trails to ensure full compliance and safety.",
    icon: Shield,
  },
  {
    title: "Dedicated Optimization",
    desc: "Proactive monitoring, expert consultation, and 24/7 support ensure your operations run at peak performance.",
    icon: CheckCircle,
  },
];

export default function Features() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      id="features"
      className="relative py-32 px-4 sm:px-8 lg:px-20 overflow-hidden bg-transparent"
    >
      {/* Animated Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        {/* Main Glow */}
        <div className="absolute top-[15%] right-[5%] w-[40rem] h-[40rem] bg-blue-600/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[35rem] h-[35rem] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        {/* Floating 3D Particles */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-3xl"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            rotate: [0, 15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] right-[20%] w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-400/10 blur-3xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Sparkle Accent */}
      <motion.div
        className="absolute top-12 left-16 opacity-60"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles
          size={44}
          className="text-cyan-400/70 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              YuvaQ
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Built for innovation and efficiency — YuvaQ delivers future-ready
            enterprise software with unmatched agility, scalability, and
            insight-driven intelligence.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {features.map((f, idx) => (
              <motion.div
                key={f.title}
                className="flex items-start gap-5 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                  <f.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {f.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Interactive Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-[2rem] blur-2xl"></div>

            {/* Dashboard Container */}
            <div className="relative bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-slate-800/80 border border-cyan-500/30 rounded-[2rem] shadow-[0_0_50px_-10px_rgba(6,182,212,0.25)] backdrop-blur-xl p-6 sm:p-8 max-w-[600px] mx-auto">
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                </div>
                <span className="text-gray-400 text-sm font-medium">
                  YuvaQ Performance Suite
                </span>
              </div>

              {/* Graph Section */}
              <div className="relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl overflow-hidden h-40 sm:h-48 flex items-center justify-center mb-6">
                <motion.svg
                  viewBox="0 0 300 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.path
                    d="M0,60 Q40,20 80,40 T160,30 T240,55 T300,40"
                    stroke="url(#gradLine)"
                    strokeWidth="3"
                    fill="transparent"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </div>

              {/* KPI Summary Row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                {[
                  { label: "Uptime", value: "99.98%", color: "text-green-400" },
                  {
                    label: "Process Speed",
                    value: "+43%",
                    color: "text-cyan-400",
                  },
                  {
                    label: "System Load",
                    value: "63%",
                    color: "text-yellow-400",
                  },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-slate-800/60 border border-slate-700/60 py-3 sm:py-4 flex flex-col items-center hover:bg-slate-800/80 transition"
                  >
                    <h4
                      className={`text-lg sm:text-xl font-bold ${metric.color}`}
                    >
                      {metric.value}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {[
                  {
                    label: "Automation Efficiency",
                    value: "92%",
                    gradient: "from-cyan-400 to-blue-500",
                  },
                  {
                    label: "Resource Utilization",
                    value: "74%",
                    gradient: "from-purple-400 to-pink-500",
                  },
                  {
                    label: "Security Compliance",
                    value: "99%",
                    gradient: "from-green-400 to-emerald-500",
                  },
                ].map((bar, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-400 mb-1">
                      <span>{bar.label}</span>
                      <span>{bar.value}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${bar.gradient}`}
                        initial={{ width: "0%" }}
                        whileInView={{ width: bar.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
