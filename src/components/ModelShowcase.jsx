import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Using <model-viewer> web component via CDN to avoid extra packages
// Provides interactive, premium-feel 3D viewers with environment lighting & camera controls

const models = [
  {
    title: "Men — Tailored Jacket Silhouette",
    subtitle: "3D fit mannequin with tailored proportions",
    model: "https://modelviewer.dev/shared-assets/models/Astronaut.glb", // stand-in mannequin
    poster:
      "https://images.unsplash.com/photo-1548883354-7622d09f8c16?q=80&w=1600&auto=format&fit=crop",
    ar: false,
  },
  {
    title: "Women — Minimal Dress Form",
    subtitle: "Sculptural drape, clean line study",
    model: "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb", // stand-in sculpture
    poster:
      "https://images.unsplash.com/photo-1550615182-15783a1bd085?q=80&w=1600&auto=format&fit=crop",
    ar: false,
  },
  {
    title: "Footwear — Last & Volume",
    subtitle: "Proportions and silhouette exploration",
    model: "https://modelviewer.dev/shared-assets/models/ShopifyModels/Chair.glb", // stand-in object for 3D interactivity
    poster:
      "https://images.unsplash.com/photo-1528701800489-20be3c2ea5be?q=80&w=1600&auto=format&fit=crop",
    ar: false,
  },
];

export default function ModelShowcase() {
  useEffect(() => {
    const id = "model-viewer-cdn-script";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.type = "module";
      s.id = id;
      s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section id="models" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="mx-auto w-[92%] md:w-[86%] lg:w-[78%]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium">3D Studio</h2>
            <p className="mt-2 text-zinc-400 max-w-2xl">
              Explore silhouettes and materials in an interactive 3D environment. Rotate, zoom, and inspect the forms that define our premium wardrobes.
            </p>
          </div>
          <a href="#men" className="hidden md:inline-block text-sm text-zinc-300 hover:text-white">Back to categories</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md"
            >
              <div className="relative aspect-[4/5]">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <model-viewer
                  src={m.model}
                  poster={m.poster}
                  loading="eager"
                  reveal="interaction"
                  shadow-intensity="0.8"
                  camera-controls
                  environment-image="neutral"
                  exposure="0.9"
                  ar={m.ar ? "true" : undefined}
                  style={{ width: "100%", height: "100%", background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(14,14,14,1) 100%)" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium">{m.title}</h3>
                      <p className="mt-1 text-sm text-zinc-300">{m.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 opacity-80">
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">3D</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10">Rotate</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <a href="#men" className="px-4 py-2 rounded-full bg-white text-black text-sm hover:opacity-90">Shop related</a>
                  <a href="#story" className="px-4 py-2 rounded-full bg-zinc-800 text-sm hover:bg-zinc-700">Story</a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-white/10 via-emerald-300/10 to-cyan-300/10 blur" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
