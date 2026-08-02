import { useState } from 'react'

// Shared on/off state for every LavaBackground instance on the page, so
// the one toggle in the header controls all of them together. Off by
// default (in keeping with prefers-reduced-motion best practice).
export function useLavaMotion() {
  const [running, setRunning] = useState(false)

  const toggle = () => setRunning((r) => !r)

  return { running, toggle }
}
