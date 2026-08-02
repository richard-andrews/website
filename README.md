# Richard Andrews - CV Website

## About

A personal portfolio/"CV" website built with React and Vite, styled in a minimalist mid-century modern aesthetic.

Content is pulled from my CV into `src/data/cv.js`, with the site designed in a flexible, data-driven way to allow for future changes without touching component code.

Live at: [richard-andrews.co.uk](richard-andrews.co.uk)

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) 5
- [ESLint](https://eslint.org/) 9
- Deployed via [GitHub Pages](https://pages.github.com/), automated with GitHub Actions

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.x or later (LTS recommended) — developed against `24.18.1`
- npm 10.x or later (bundled with Node.js) — developed against `11.16`
- Git

### Installation

```bash
git clone https://github.com/richard-andrews/cv-website.git
cd cv-website
npm install
```

### Development

```bash
npm run dev      # start local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # run eslint
```

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/deploy.yml`) — on every push to `main`, the site is linted, built, and published to the `gh-pages` branch, which GitHub Pages serves directly.

A separate workflow (`.github/workflows/lint-pr.yml`) lints every pull request on open and on each new push, as a status check before merging.

The custom domain is configured via `public/CNAME`, which Vite copies into the build output automatically.

## Feature flags

`src/config.js` holds flags for the more experimental bits:

- **`LAVA_LAMP_ENABLED`** — one animated lava-lamp background shared by the whole page (rather than a separate one per section), so blobs can drift across a section boundary instead of stopping dead at its edge. It's only actually visible behind Experience, Skills, and Hobbies by default — see `INSET_SECTIONS` below. Set it to `true` to switch the whole feature on (background + its play/pause button in the header), or leave it `false` to keep the code around without it showing at all. Runs automatically on page load; the header button pauses it.
- **`INSET_SECTIONS`** — on desktop, draws each section as a centred panel instead of a full-bleed band, leaving the page background exposed down both sides. Pairs with the lava lamp: with both flags on, every section (not just Experience/Skills/Hobbies) gets the lava background, so the blobs stay visible in the side gutters all the way down the page, while text sits on a solid panel. The header and footer stay full width either way.

## Branching & workflow

This is a solo project, but it's set up using [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow) as a deliberate choice — trunk-based, with PRs as a review/quality gate even for a single contributor:

- `main` is the trunk — always deployable, protected
- New work happens on short-lived branches off `main` (e.g. `feat/add-projects-section`, `fix/mobile-nav-overflow`)
- Changes go through a pull request, gated by the lint workflow and a [CODEOWNERS](.github/CODEOWNERS) review requirement
- Merges are squashed, keeping `main`'s history a clean, readable list of discrete changes
- The `gh-pages` branch is deploy output only — fully automated, never edited by hand

## License

MIT License

Copyright (c) 2023 Richard Andrews

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.