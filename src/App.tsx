import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import WhatIDo from "./sections/WhatIDo";
import SelectedWork from "./sections/SelectedWork";
import Stats from "./sections/Stats";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <main className="bg-(--color-canvas) text-(--color-ink)">
      <Header />
      <Hero />
      <About />
      <WhatIDo />
      <SelectedWork />
      <Stats />
      <Process />
      <Contact />
    </main>
  );
}
