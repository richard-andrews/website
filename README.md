# Richard Andrews - CV Website

A single-page React CV site, styled in a minimalist mid-century modern aesthetic
(warm cream background, burnt orange / teal / mustard accents, geometric arc and
sunburst motifs used sparingly).

Content is pulled from `cv.txt` into `src/data/cv.js` - not everything from the
CV made it onto the site; it's a condensed, web-friendly summary.

## Fonts

- **Fraunces** - headings, a warm serif with retro character
- **Jost** - body copy, a geometric sans in the spirit of Futura
- **Space Mono** - small labels (eyebrow text, dates)

All three are loaded from Google Fonts and easy to swap in `index.html` /
`src/styles/index.css` if you want to try alternatives.

## Content

Everything the page renders comes from `src/data/cv.js`, and each section
is data-driven - add or remove entries and the page follows:

- `experience` - one entry per position
- `education` - one entry per institution
- `hobbies` - a plain list of labels
- `gallery` - carousel photos, independent of `hobbies` (no 1:1 mapping)
- `skills`, `leadership`, `stats`, `profile`

Images: drop a photo at `public/profile.jpg` for the hero portrait, and
at the `src` paths listed in `gallery` (e.g. `public/gallery/01.jpg`) for
the carousel. Anything missing falls back to a placeholder.

## Feature flags

`src/config.js` holds flags for the more experimental bits:

- `LAVA_LAMP_ENABLED` - the animated lava-lamp background behind the
  Experience, Skills, and Hobbies sections. Set it to `true` to switch
  the whole feature on (background + its play/pause button in the
  header), or leave it `false` to keep the code around without it
  showing at all.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run lint     # eslint
```
