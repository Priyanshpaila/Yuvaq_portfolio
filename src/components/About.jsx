"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What does YuvaQ specialize in?",
      a: "YuvaQ focuses on building AI-driven automation and enterprise software that helps organizations simplify operations, improve efficiency, and scale securely.",
    },
    {
      q: "Who are your solutions for?",
      a: "We work with startups, SMBs, and large enterprises across industries — from manufacturing and logistics to healthcare, education, and fintech.",
    },
    {
      q: "How do you ensure data security?",
      a: "Our architecture follows strict enterprise security protocols: encrypted data storage, role-based access control, and continuous monitoring for vulnerabilities.",
    },
    {
      q: "Do you offer custom integrations?",
      a: "Absolutely. We design API-driven systems that integrate with CRMs, ERPs, data platforms, and other business tools you already use.",
    },
    {
      q: "What makes YuvaQ different?",
      a: "We combine design thinking with deep technical expertise — delivering automation that not only performs well but also feels intuitive and human-centered.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6 sm:px-10 lg:px-20 bg-transparent"
    >
      {/* 💠 Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-[5%] w-[28rem] h-[28rem] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-[5%] w-[25rem] h-[25rem] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-16">
        {/* 🏷️ Section Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span className="text-cyan-300 text-sm font-semibold tracking-wide">
            About YuvaQ
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Empowering{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Businesses
          </span>{" "}
          with Smart Automation
        </h2>

        <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
          We believe technology should amplify people — not replace them. Our AI and automation
          solutions are designed to bring clarity, speed, and reliability to the enterprise
          ecosystem.
        </p>
      </div>

      {/* ✨ FAQ Section */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-4 mb-9">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            className="border border-white/10 bg-white/[0.02] rounded-xl backdrop-blur-sm overflow-hidden"
            initial={false}
          >
            <button
              className="w-full flex justify-between items-center px-5 sm:px-6 py-4 text-left text-white font-medium hover:bg-white/[0.04] transition"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <span>{item.q}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="text-cyan-400" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-5 sm:px-6 pb-4 text-gray-400 text-sm sm:text-base leading-relaxed"
                >
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation First",
                description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
                icon: "⚡",
              },
              {
                title: "Reliability Built In",
                description: "Enterprise-grade infrastructure with 99.9% uptime ensures your business never stops.",
                icon: "🔒",
              },
              {
                title: "Human-Centered Design",
                description:
                  "Intuitive interfaces that empower users, not confuse them. Technology should serve people.",
                icon: "👥",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-white/10 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-3">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      {/* 🌙 Subtle Fade Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
