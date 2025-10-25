import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const panels = [
  {
    title: "The Cut",
    subtitle: "Precision in every seam",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Texture & Light",
    subtitle: "Cashmere, silk, and pure cotton",
    image:
      "https://images.unsplash.com/photo-1520975922215-cf8a6c0b2453?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Modern Craft",
    subtitle: "Minimalist silhouettes, maximal feeling",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop",
  },
];

function Panel({ image, title, subtitle, i, progress }) {
  const z = useTransform(progress, [i - 0.2, i, i + 0.2], [200, 0, -120]);
  const rotate = useTransform(progress, [i - 0.2, i, i + 0.2], [8, 0, -6]);
  const opacity = useTransform(progress, [i - 0.15, i, i + 0.15], [0.15, 1, 0.2]);

  return (
    <motion.section
      style={{ opacity }}
      className="relative h-[120svh] md:h-[140svh] flex items-center justify-center perspective"
    >
      <motion.div
        style={{ translateZ: z, rotateY: rotate }}
        className="relative w-[90%] md:w-[80%] lg:w-[70%] aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl shadow-black/50 will-change-transform"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover scale-[1.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <h3 className="text-xl md:text-3xl font-medium">{title}</h3>
          <p className="mt-2 text-sm md:text-base text-zinc-300">{subtitle}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default function ThreeDScrollGallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div id="story" ref={ref} className="relative bg-black">
      <div className="sticky top-0 h-24 bg-gradient-to-b from-black to-transparent z-10" />
      {panels.map((p, i) => (
        <Panel key={i} i={i / panels.length} {...p} progress={scrollYProgress} />
      ))}

      <div className="relative mx-auto mb-24 mt-8 w-[90%] md:w-[80%] lg:w-[70%]">
        <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 backdrop-blur">
          <h4 className="text-lg md:text-2xl">Interactive 3D feel</h4>
          <p className="mt-2 text-zinc-300 text-sm md:text-base">
            A layered parallax and perspective system gives a cinematic, 3D scrolling narrative. Hover cards tilt in 3D, while sections advance like scenes in a film.
          </p>
        </div>
      </div>
    </div>
  );
}
