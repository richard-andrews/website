# Richard Andrews — CV Website

A single-page React CV site, styled in a minimalist mid-century modern aesthetic
(warm cream background, burnt orange / teal / mustard accents, geometric arc and
sunburst motifs used sparingly).

Content is pulled from `cv.txt` into `src/data/cv.js` — not everything from the
CV made it onto the site; it's a condensed, web-friendly summary.

## Fonts

- **Fraunces** — headings, a warm serif with retro character
- **Jost** — body copy, a geometric sans in the spirit of Futura
- **Space Mono** — small labels (eyebrow text, dates)

All three are loaded from Google Fonts and easy to swap in `index.html` /
`src/styles/index.css` if you want to try alternatives.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run lint     # eslint
```
