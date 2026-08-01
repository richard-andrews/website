function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1.5" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22.5" />
            <line x1="4.2" y1="4.2" x2="5.9" y2="5.9" />
            <line x1="18.1" y1="18.1" x2="19.8" y2="19.8" />
            <line x1="1.5" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22.5" y2="12" />
            <line x1="4.2" y1="19.8" x2="5.9" y2="18.1" />
            <line x1="18.1" y1="5.9" x2="19.8" y2="4.2" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            d="M20 14.3A8.4 8.4 0 0 1 9.7 4 8.4 8.4 0 1 0 20 14.3Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggle
