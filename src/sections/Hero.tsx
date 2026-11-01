import { motion } from "motion/react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 1, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="relative overflow-hidden pb-8"
    >
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[900px] w-[600px] opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-canvas-2) 0%, transparent 70%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h1
          variants={item}
          className="font-display text-center font-semibold leading-[0.85] text-(--color-ink) text-[90px] sm:text-[140px] md:text-[170px]"
        >
          PORTFOLIO
        </motion.h1>

        <motion.div variants={item} className="relative -mt-4 flex justify-center">
          <img
            src="/img/hero-cutout.png"
            alt="Sharafat Khan, AI/ML engineer"
            className="aspect-[3/4] w-[62vw] max-w-[420px] rounded object-cover object-top shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          />
          <div className="absolute right-0 top-[45%] hidden h-[118px] w-[118px] items-center justify-center rounded-full border border-(--color-ink)/20 text-center sm:flex">
            <span className="px-3 text-[9px] uppercase tracking-[0.18em] text-(--color-ink-dim)">
              Open To
              <br />
              Opportunities
            </span>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <motion.div variants={item}>
            <div className="text-[15px] tracking-[0.24em] text-(--color-accent)">
              I'M SHARAFAT KHAN
            </div>
            <h2 className="font-display mt-1 text-4xl font-bold leading-tight">
              AI/ML ENGINEER
            </h2>
            <div className="mt-1 text-[13px] tracking-[0.22em] text-(--color-ink-dim)">
              &amp; FULL-STACK DEVELOPER
            </div>
            <p className="mt-5 max-w-[340px] text-sm leading-[1.8] text-(--color-ink-dim)">
              Analytical and detail-oriented, I build intelligent solutions: customer ops platforms, NLP safety engines and data trackers.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col items-start md:items-end text-left md:text-right"
          >
            <p className="font-display text-2xl italic leading-snug">
              Intelligent systems
              <br />
              that actually ship
            </p>
            <ul className="mt-6 space-y-2 text-[13px] tracking-[0.08em] text-(--color-ink-dim)">
              {["MACHINE LEARNING", "NLP & AGENTIC AI", "FASTAPI & REACT", "RULE ENGINES"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-(--color-accent)">— </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
