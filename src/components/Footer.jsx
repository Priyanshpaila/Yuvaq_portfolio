"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/20 bg-transparent backdrop-blur-md relative overflow-hidden">
      {/* Animated gradient glow background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="absolute bottom-[-10rem] left-[20%] w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-[-5rem] right-[10%] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="YuvaQ Logo"
                className="w-20 h-10 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
              />
              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enterprise-grade automation and intelligent systems for future-ready businesses.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-cyan-400 transition">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>



          {/* Socials / CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <p className="text-gray-400 text-sm mb-3">
              Reach us anytime at
              <br />
              <span className="text-cyan-400 font-medium">
                connect@yuvaq.com
              </span>
            </p>
            <a
              href="#contact"
              className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 <span className="text-cyan-400 font-medium">YuvaQ</span>. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 sm:mt-0">
            Built  by YuvaQ Team
          </p>
        </div>
      </div>
    </footer>
  );
}
