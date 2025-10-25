import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 mt-10">
      <div className="mx-auto w-[92%] md:w-[86%] lg:w-[78%] py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-zinc-300">
        <div>
          <div className="text-white tracking-[0.2em] font-semibold">ATELIER</div>
          <p className="mt-3 max-w-sm">Premium garments meet immersive storytelling. Designed for connoisseurs of quiet luxury.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-white mb-2">Shop</div>
            <ul className="space-y-2">
              <li><a href="#men" className="hover:text-white">Men</a></li>
              <li><a href="#women" className="hover:text-white">Women</a></li>
              <li><a href="#story" className="hover:text-white">Story</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white mb-2">Support</div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <div>© {new Date().getFullYear()} Atelier. All rights reserved.</div>
          <div className="mt-2 text-xs text-zinc-500">Crafted with precision.</div>
        </div>
      </div>
    </footer>
  );
}
