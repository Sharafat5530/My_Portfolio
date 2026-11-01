import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section className="bg-(--color-canvas-2) pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Let's Build Something
            <em className="mt-1 block text-4xl font-medium italic sm:text-[46px]">
              Intelligent
            </em>
          </h2>

          <div className="flex max-w-[300px] items-center gap-3.5 rounded-full border border-(--color-ink)/20 py-2 pl-2 pr-5">
            <img
              src="/img/contact-avatar.png"
              alt="Sharafat Khan"
              className="h-12 w-12 rounded-full object-cover object-top"
            />
            <div>
              <div className="text-[11px] text-(--color-ink-dim)">
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Open To Work
              </div>
              <div className="text-xs font-medium">Internships &amp; Roles</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-10 border-t border-(--color-ink)/15 pt-8 sm:grid-cols-3">
          <div className="grid gap-10 sm:grid-cols-3 sm:col-span-3">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">
                Get In Touch
              </div>
              <div className="mt-3.5 text-[15px] leading-[1.9]">
                sharafatkhan5530@gmail.com
                <br />
                +91 88826 77412
              </div>
              <a
                href="mailto:sharafatkhan5530@gmail.com"
                className="mt-7 inline-block border border-(--color-ink) px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-(--color-ink) hover:text-(--color-canvas) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
              >
                Get In Touch
              </a>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">
                Location
              </div>
              <div className="mt-3.5 text-[15px]">India</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-(--color-accent)">
                Follow
              </div>
              <div className="mt-3.5 text-[15px] leading-[1.9]">
                <a
                  href="https://github.com/"
                  target="_blank" rel="noreferrer"
                  className="block hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank" rel="noreferrer"
                  className="block hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:sharafatkhan5530@gmail.com"
                  className="block hover:text-(--color-accent) focus-visible:ring-2 focus-visible:ring-(--color-accent)"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-8 flex flex-wrap justify-between gap-2 border-t border-(--color-ink)/15 pt-6 text-[10px] uppercase tracking-[0.15em] text-(--color-ink-dim)">
          <span>© 2026 Sharafat Khan</span>
          <span>AI/ML Engineer</span>
        </footer>
      </div>
    </section>
  );
}
