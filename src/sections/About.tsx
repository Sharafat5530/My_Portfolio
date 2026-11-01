import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="bg-(--color-canvas-2) py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[320px_1fr]">
        <Reveal>
          <img
            src="/img/about.jpg"
            alt="Sharafat Khan standing in a lobby"
            className="aspect-[3/4] w-full rounded object-cover object-top"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">
            Professional Summary
          </div>
          <h2 className="font-display mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            Analytical, detail-oriented
            <em className="block font-medium italic">AI/ML Engineer</em>
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-(--color-ink-dim)">
            A strong foundation in machine learning, full-stack development and
            AI systems. I build intelligent solutions including customer ops
            platforms, NLP safety engines and data trackers, backed by
            professional IBM SkillsBuild certifications in AI, Cybersecurity
            and Project Management.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
