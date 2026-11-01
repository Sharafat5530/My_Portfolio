import Reveal from "../components/Reveal";

const SERVICES = [
  {
    num: "01",
    title: "PROGRAMMING",
    desc: "Python, Java, JavaScript, TypeScript, SQL.",
    img: "/img/service-branding.png",
  },
  {
    num: "02",
    title: "FRAMEWORKS & WEB",
    desc: "FastAPI, React, REST APIs.",
    img: "/img/service-webdesign.png",
  },
  {
    num: "03",
    title: "AI & ML",
    desc: "Agentic AI, NLP, NumPy, Pandas, Matplotlib, ML fundamentals.",
    img: "/img/service-uiux.png",
  },
  {
    num: "04",
    title: "DATABASES & TOOLS",
    desc: "MySQL, MongoDB, SQLite, VS Code, Git/GitHub, Google Colab.",
    img: "/img/service-artdirection.png",
  },
];

export default function WhatIDo() {
  return (
    <section className="bg-(--color-paper) py-14 text-(--color-ink-on-paper)">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-baseline gap-4">
            <span className="text-2xl text-(--color-canvas-2)">+</span>
            <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
              TECHNICAL SKILLS
            </h2>
          </div>
          <p className="max-w-[220px] text-sm leading-[1.7] text-(--color-canvas-2)">
            A toolkit spanning machine learning, full-stack development and data.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.1}>
              <div className="group relative aspect-[3/3.6] overflow-hidden rounded p-5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(28,5,7,0.15) 0%, rgba(28,5,7,0.95) 78%)",
                  }}
                />
                <span className="font-display absolute right-4 top-4 z-10 text-xs text-(--color-accent)">
                  {s.num}
                </span>
                <div className="absolute inset-x-5 bottom-5 z-10">
                  <h3 className="font-display text-lg tracking-wide text-(--color-ink)">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[200px] text-xs leading-[1.6] text-(--color-ink-dim)">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
