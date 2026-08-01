// Small, reusable mid-century-modern accent shapes. Purely decorative.

export function Sunburst({ className }) {
  const rays = Array.from({ length: 12 })
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(100,100)">
        {rays.map((_, i) => {
          const angle = (i * 360) / rays.length
          return (
            <rect
              key={i}
              x="-3"
              y="-98"
              width="6"
              height="34"
              rx="3"
              fill="currentColor"
              transform={`rotate(${angle})`}
            />
          )
        })}
      </g>
    </svg>
  )
}

export function Boomerang({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 90"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M50 10C20 10 5 35 10 55c4 17 20 30 40 25-10-10-12-25-2-35 10-10 27-7 34 5 13-10 13-25 3-33-7-5-17-7-25-7-4 0-7 0-10 0Z"
      />
    </svg>
  )
}

export function Dot({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="10" fill="currentColor" />
    </svg>
  )
}
