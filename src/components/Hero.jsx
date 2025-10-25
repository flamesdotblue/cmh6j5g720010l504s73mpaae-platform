import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/2 top-1/4 h-[80vmax] w-[80vmax] rounded-full bg-gradient-to-tr from-emerald-400/20 via-white/5 to-cyan-400/20 blur-3xl" />
        <div className="absolute -right-1/3 bottom-0 h-[60vmax] w-[60vmax] rounded-full bg-gradient-to-tr from-fuchsia-400/10 via-white/5 to-indigo-500/20 blur-3xl" />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="font-semibold tracking-[0.2em] text-zinc-200">ATELIER</div>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300/90">
          <a href="#story" className="hover:text-white transition">Story</a>
          <a href="#men" className="hover:text-white transition">Men</a>
          <a href="#women" className="hover:text-white transition">Women</a>
          <a href="#models" className="hover:text-white transition">3D</a>
        </div>
      </nav>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight"
        >
          Tailored Luxury, Designed for Motion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-zinc-300"
        >
          A premium, story-driven 3D scroll experience for modern wardrobes. Crafted in Italian and British cuts, elevated with silk, cashmere, and timeless silhouettes.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#men" className="px-6 py-3 rounded-full bg-white text-black hover:opacity-90 transition">Shop Men</a>
          <a href="#women" className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition">Shop Women</a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-zinc-400">
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
