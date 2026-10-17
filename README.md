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

## Design system

All styles live in one `<style>` block in `index.html`, ordered tokens → base → type → surfaces → buttons → navigation → sections. Please extend it rather than adding override blocks at the end; stacked overrides are what made the old stylesheet hard to reason about.

**Colour.** Pages are white (`--white`); alternate light bands use `--tint`. Brand colours are unchanged: Pewter `#9BB89E`, Putney `#4E8060`, Penny `#AB6C43`, Forest `#0D2B1A`. Text uses `--ink` (headings), `--ink-2` (body), `--ink-3` (meta), all AA on white and tint. On dark, use `--on-dark`, `--on-dark-2`, `--on-dark-3`.

**Type.** Weight carries the hierarchy, not just size:

| Role | Font | Weight |
|---|---|---|
| Display (hero, closing) | Inter | 600 |
| Section heading `.h-section` | Inter | 500 |
| Card / item title | Inter | 600 |
| Body, lede | Alexandria | 300 |
| Meta, captions | Alexandria | 300–400 |
| Labels (uppercase, tracked) | Alexandria | 500 |
| Figures, step numbers, accents | Gideon Roman | 400 |

**Spacing.** 8px scale: `--s1` 4 · `--s2` 8 · `--s3` 12 · `--s4` 16 · `--s5` 24 · `--s6` 32 · `--s7` 40 · `--s8` 48 · `--s9` 64 · `--s10` 80 · `--s11` 96 · `--s12` 128. Sections use `--sec-y` top and bottom; heading-to-content uses `--head-gap`.

**Surfaces.** Pills, chips, tabs and small controls are glass (`--glass-light-*` on light, `--glass-dark-*` on dark). Copper buttons are raised (`--cu-face`, `--cu-shadow`) and carry text only, no coin icon.

**Brand motifs.** The P monogram opens and closes the page: a tinted tile texture (`--p-tile`, used as a mask) and an oversized watermark (`.bigp`) in the hero, the closing section and the footer. The penny coin appears as the flipping coin in the hero, the thread nodes, the fee-bar ends, the coin on the How It Works track and the step numerals.

**Shapes and flow.** Light sections are rounded sheets on Forest (`--sheet-x`, `--sheet-r`). Centred section openings start with a `.thread` (a copper line dropping to a penny) so the eye follows one axis down the page; Technology, Research and Contact stay left-aligned for contrast.

**Motion.** Scroll-triggered only, played once. A small script in `<head>` adds `.motion` when the browser supports it and the visitor has not asked for reduced motion; without it, everything is visible and static. Elements reveal via `data-r` (`up`, `left`, `right`, `scale`, `tilt`), headings rise word by word, the hero coin flips and the P watermarks drift with scroll, and the How It Works penny rides its track as you scroll. Hover/press animation is reserved for things you can click.

**Punctuation.** Every section headline (H1/H2, and the Use case panel headlines) is a statement and ends with a period; in section headlines the period is a copper `.pd` "penny dot". Titles, labels, buttons, table headers and caption fragments never take one. Write "U.S." with periods everywhere (patent numbers keep the USPTO "US 11,875,330 B2" form).

**Emphasis for skimming.** At most one or two per paragraph: `.em` (one weight heavier) for a key fact, `.hl` (copper underline that draws in on scroll) for a key claim, `.ring` (hand-drawn loop) for the single number to remember. Wrap existing words only; never reword to create a highlight.

**Serif weight.** Gideon Roman ships in one weight, so numerals and small serif text get a hairline `-webkit-text-stroke` in the text colour for readability.

**Tip demo.** Three example stories (article, video, community post) are fictional and labelled "Demo · no real money". The ledger shows the balance and a "Creators supported" counter; after a tip, the demo moves to the next creator not yet tipped.
