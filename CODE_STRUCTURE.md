# Sharafat Khan Portfolio — Code Structure

```
sharafat-portfolio/
├── index.html                  Page title, SEO/social meta, favicon, fonts
├── package.json                Scripts and dependencies (React, Vite, Tailwind, motion)
├── vite.config.ts              Vite build/dev config
├── tsconfig*.json              TypeScript config
├── public/
│   ├── favicon.svg             "SK" logo mark
│   ├── manifest.webmanifest    Web app manifest
│   ├── og-image.jpg            Social share image
│   └── img/
│       ├── hero-cutout.png     Hero photo (your photo 1)
│       ├── about.jpg           About photo (your photo 2)
│       ├── contact-avatar.png  Round face crop in contact section
│       ├── work-*.png          Project card art (NEXUS, SIF Engine, UPI Tracker)
│       └── service-*.png       Skill card backgrounds
└── src/
    ├── main.tsx                App entry point
    ├── App.tsx                 Page layout: orders the sections below
    ├── index.css               Theme colours (@theme tokens), fonts, base styles
    ├── components/
    │   └── Reveal.tsx          Scroll-reveal animation wrapper
    └── sections/
        ├── Header.tsx          Top bar
        ├── Hero.tsx            PORTFOLIO headline, photo, name, role
        ├── About.tsx           Photo + professional summary
        ├── WhatIDo.tsx         Technical skills (4 groups)
        ├── SelectedWork.tsx    Projects: NEXUS, SIF Engine, UPI Tracker
        ├── Stats.tsx           Quick numbers
        ├── Process.tsx         Education & certifications
        └── Contact.tsx         Email, phone, social links, footer
```

Where to edit: all text lives inside the files in `src/sections/`. Colours are in `src/index.css`. Page title/meta are in `index.html`.

Run locally: `pnpm install` then `pnpm dev` (build: `pnpm build`).
