import React from "react";
import Hero from "./components/Hero";
import ThreeDScrollGallery from "./components/ThreeDScrollGallery";
import Categories from "./components/Categories";
import ModelShowcase from "./components/ModelShowcase";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Hero />
      <ThreeDScrollGallery />
      <Categories />
      <ModelShowcase />
    </div>
  );
}
