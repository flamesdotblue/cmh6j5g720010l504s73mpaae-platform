import React from "react";
import { motion } from "framer-motion";

const men = [
  {
    title: "Tailored Suits",
    desc: "Italian & British cuts in navy, charcoal, beige",
    image:
      "https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Silk & Egyptian Cotton Shirts",
    desc: "Neutral tones, perfected collars",
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Cashmere Sweaters",
    desc: "Soft, high-quality, enduring warmth",
    image:
      "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Wool & Trench Coats",
    desc: "Timeless elegance for any city",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Luxury Polos",
    desc: "Fine pique cotton, elevated basics",
    image:
      "https://images.unsplash.com/photo-1520975922215-094aec4d7b38?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Designer Footwear",
    desc: "Loafers, Chelsea boots, Oxfords",
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c2ea5be?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Minimalist Streetwear",
    desc: "High-end tracksuits & hoodies",
    image:
      "https://images.unsplash.com/photo-1511559649-74fcbf3ae9ae?q=80&w=1600&auto=format&fit=crop",
  },
];

const women = [
  {
    title: "Designer Dresses",
    desc: "Minimal silhouettes, luxurious fabrics",
    image:
      "https://images.unsplash.com/photo-1550615182-15783a1bd085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Tailored Blazers & Power Suits",
    desc: "Sharp lines with effortless grace",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Silk Blouses & Cashmere",
    desc: "Soft textures, quiet luxury",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Statement Coats",
    desc: "Trench, long wool, or leather",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d09f8c16?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "High-quality Basics",
    desc: "Pure cotton, linen, or silk",
    image:
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Luxury Athleisure",
    desc: "Loro Piana, Alo, The Row style",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop",
  },
];

function Card({ item, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md"
    >
      <div className="relative h-72">
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="p-5">
        <h5 className="text-lg font-medium">{item.title}</h5>
        <p className="mt-1 text-sm text-zinc-300">{item.desc}</p>
        <div className="mt-4 flex items-center gap-3">
          <a href="#models" className="px-4 py-2 rounded-full bg-white text-black text-sm hover:opacity-90">Explore</a>
          <a href="#models" className="px-4 py-2 rounded-full bg-zinc-800 text-sm hover:bg-zinc-700">3D View</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-white/10 via-emerald-300/10 to-cyan-300/10 blur" />
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section className="relative z-0">
      <div id="men" className="mx-auto w-[92%] md:w-[86%] lg:w-[78%] py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium">Men</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">Tailored suits, silk shirts, cashmere knits, designer footwear, and minimalist streetwear crafted for movement.</p>
          </div>
          <a href="#models" className="hidden md:inline-block text-sm text-zinc-300 hover:text-white">3D Studio</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {men.map((m, i) => (
            <Card key={m.title} item={m} delay={i * 0.05} />
          ))}
        </div>
      </div>

      <div id="women" className="mx-auto w-[92%] md:w-[86%] lg:w-[78%] py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium">Women</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">Designer dresses, power suits, silk blouses, statement coats, refined basics, and luxury athleisure.</p>
          </div>
          <a href="#models" className="hidden md:inline-block text-sm text-zinc-300 hover:text-white">3D Studio</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {women.map((w, i) => (
            <Card key={w.title} item={w} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
