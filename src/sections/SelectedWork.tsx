import Reveal from "../components/Reveal";

const WORK = [
  {
    brand: "NEXUS",
    cat: "React · TypeScript · FastAPI · SQLite",
    desc: "Full-stack AI teammate platform for customer ops with automated workflows, human-in-the-loop approvals, audit trails and duplicate-action prevention.",
    img: "/img/work-lune.png",
  },
  {
    brand: "SIF ENGINE",
    cat: "Python · NLP · Hybrid AI · Rule Engine",
    desc: "Hybrid AI and domain-rule engine classifying safety reports, detecting SIF precursors and failed controls, with a 0-100 IOGP severity scanner and evidence-backed explanations.",
    img: "/img/work-noir.png",
  },
  {
    brand: "UPI TRACKER",
    cat: "Python · ML Libraries",
    desc: "Intelligent transaction tracker that monitors, analyzes and categorizes UPI payments.",
    img: "/img/work-maree.png",
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-(--color-canvas) py-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">
            PROJECTS
          </h2>
          <p className="max-w-[220px] text-sm leading-[1.7] text-(--color-ink-dim)">
            Intelligent systems built end to end.
          </p>
          <a
            href="mailto:sharafatkhan5530@gmail.com"
            className="whitespace-nowrap border-b border-(--color-accent) pb-1 text-[11px] uppercase tracking-[0.2em] text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
          >
            Get In Touch
          </a>
        </Reveal>

        <div id="work" className="grid gap-6 sm:grid-cols-3">
          {WORK.map((w, i) => (
            <Reveal key={w.brand} delay={i * 0.12}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded bg-black">
                <img
                  src={w.img}
                  alt={`${w.brand} project`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,3,4,0.85) 100%)",
                  }}
                >
                  <div className="font-display text-2xl font-bold tracking-wide text-(--color-ink)">
                    {w.brand}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                    {w.cat}
                  </div>
                  <p className="mt-3 text-xs leading-[1.6] text-(--color-ink-dim)">
                    {w.desc}
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
