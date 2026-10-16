# PennyPay

Single-page site for PennyPay: patented infrastructure for digital micropayments from one cent to three dollars.

- `index.html`: the whole site (vanilla JS, canvas hero animation, animated "Behind the screens" walkthrough)
- `assets/site.css`: compiled Tailwind utilities (see below)
- `docs/seo-handoff.md`: title/meta plan and launch checklist
- Sections are anchor-linked: `#how`, `#technology`, `#uses`, `#opportunity`, `#patents`, `#leadership`, `#contact`
- Audience deep links: `#investors`, `#creators`, `#nonprofits`, `#platforms`, `#careers`

Hosted with GitHub Pages (Settings → Pages → Deploy from branch `main`, root).

## Before launch

- Contact form: set `CONTACT.endpoint` (Formspree URL) and `CONTACT.email` near the bottom of `index.html`.
- Leadership: titles, bios, photos, and LinkedIn for each person (see the TODO comment above `.people`).

## Rebuilding the CSS

Tailwind is compiled ahead of time instead of loaded from the Play CDN. After adding or changing Tailwind classes in `index.html`, run:

```sh
npx tailwindcss@3.4.17 -c tailwind.config.js -i tailwind.input.css -o assets/site.css --minify
```

Commit the updated `assets/site.css`. GitHub Pages has no build step.
