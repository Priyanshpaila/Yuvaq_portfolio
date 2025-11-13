"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#modules" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/logo.png"
                alt="YuvaQ Logo"
                className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
              />
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="relative text-gray-300 hover:text-cyan-300 transition font-medium group"
                >
                  {item.name}
                  <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cyan-300 hover:text-cyan-100 transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[55] bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-black/90 backdrop-blur-xl border-t border-cyan-500/20 md:hidden overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-4 min-h-screen flex flex-col">
              {navItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  whileHover={{ x: 5 }}
                  className="block mt-7 text-gray-200 hover:text-cyan-300 text-lg font-medium py-3 border-b border-white/5"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
