import { useState } from 'react'

// Shared on/off state for every LavaBackground instance on the page, so
// the one toggle in the header controls all of them together. Runs by
// default when the page loads; the header button lets you pause it.
export function useLavaMotion() {
  const [running, setRunning] = useState(true)

  const toggle = () => setRunning((r) => !r)

  return { running, toggle }
}
