# pomodot_landing

Landing page for Pomodot — the offline-first task manager with a built-in Pomodoro timer.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Editing content

All marketing copy and the roadmap live in **`src/content/site.js`** — no component changes needed.

- `roadmap.columns` — move items between *Building now (v1)*, *Up next* and *On the horizon* as plans change.
- `links.waitlistUrl` — set to your waitlist/signup URL and every main CTA becomes **Get early access**.
- `links.appUrl` — set once the web app exists; a **Sign in** link appears in the header.

## Design tokens

Colours are CSS variables at the top of `src/styles.css` (tomato · cream · deep ink · sage, plus a dark theme).
Brand palettes selectable in the header are in `src/theme/palettes.js`; each primary colour keeps ≥ 4.5:1 contrast with white button text.
