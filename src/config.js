// Feature flags for still-experimental additions to the site. Flip a
// value here to show or hide the feature without deleting the code -
// handy for something you're still deciding on.

// One animated lava-lamp background spans the whole page (see
// LavaBackground.jsx), sitting behind every section rather than being
// clipped to one - so a blob can drift across a section boundary
// instead of stopping dead at its edge. It only actually shows
// through wherever a section's own background is transparent: by
// default that's Experience, Skills, and Hobbies; every section shows
// it once INSET_SECTIONS is also on (see below). Runs automatically
// once switched on; the header button pauses it. Off by default.
export const LAVA_LAMP_ENABLED = true

// On desktop, draw each section as a centred panel instead of a
// full-bleed band, leaving the page background exposed down both
// sides - which turns every section's own background transparent, so
// with the lava lamp also on, its blobs show continuously in those
// side gutters all the way down the page rather than only behind the
// three sections that show it by default. Text sits on a solid panel
// either way, so it stays readable. The header and footer stay full
// width regardless of this flag.
export const INSET_SECTIONS = true
