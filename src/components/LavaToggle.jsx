import { LAVA_LAMP_ENABLED } from '../config.js'

function LavaToggle({ running, onToggle }) {
  if (!LAVA_LAMP_ENABLED) return null

  return (
    <button
      type="button"
      className="lava-toggle"
      aria-pressed={running}
      aria-label={running ? 'Pause background motion' : 'Play background motion'}
      onClick={onToggle}
    >
      {running ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
          <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
        </svg>
      )}
    </button>
  )
}

export default LavaToggle
