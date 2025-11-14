"use client";

import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const now = new Date();
    const formattedDate = `${String(now.getDate()).padStart(2, "0")}/${String(
      now.getMonth() + 1
    ).padStart(2, "0")}/${now.getFullYear()} at ${now.toLocaleTimeString(
      "en-IN",
      { hour: "2-digit", minute: "2-digit", hour12: true }
    )}`;

    const templateParams = { ...formData, date: formattedDate };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-32 px-4 sm:px-8 overflow-hidden bg-transparent"
    >
      {/* Animated 3D Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[10%] w-[40rem] h-[40rem] bg-cyan-500/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[35rem] h-[35rem] bg-blue-600/10 blur-[180px] rounded-full"></div>
        <motion.div
          className="absolute top-[30%] left-[25%] w-28 h-28 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/10 blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[30%] right-[25%] w-36 h-36 rounded-full bg-gradient-to-br from-purple-400/20 to-cyan-400/10 blur-3xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        className="absolute top-12 right-20 opacity-70"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles
          size={44}
          className="text-cyan-400/70 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      {/* Centered Card */}
      <div className="relative max-w-3xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Let’s automate your workflow with{" "}
            <span className="text-cyan-400 font-semibold">YuvaQ</span> solutions.
            We’ll respond within 24 hours.
          </p>
        </motion.div>

        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-800/60 border border-cyan-500/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] p-8 sm:p-10"
        >
          {/* Contact Info Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              {
                icon: Mail,
                color: "text-cyan-400",
                label: "connect@yuvaq.com",
              },
              // {
              //   icon: Phone,
              //   color: "text-blue-400",
              //   label: "+91 98765 43210",
              // },
              {
                icon: MapPin,
                color: "text-purple-400",
                label: "Nagpur, Maharashtra",
              },
            ].map(({ icon: Icon, color, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700 border border-cyan-400/20 shadow-lg ${color}`}
                >
                  <Icon size={24} />
                </div>
                <p className="text-gray-300 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>

          {/* Status Messages */}
          {status === "success" && (
            <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 flex items-center gap-2">
              <CheckCircle size={20} /> Message sent successfully!
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300">
              Something went wrong. Please try again.
            </div>
          )}

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-900/60 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={status === "loading"}
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
