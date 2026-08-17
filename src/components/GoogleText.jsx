const GOOGLE_COLORS = ['#4285F4', '#EA4335', '#FBBC05', '#4285F4', '#34A853', '#EA4335']

export function GoogleText({ children = 'Google', className = '' }) {
  const text = String(children)

  return (
    <span className={`inline whitespace-nowrap ${className}`} aria-label={text}>
      {text.split('').map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          style={{ color: GOOGLE_COLORS[index % GOOGLE_COLORS.length] }}
        >
          {letter}
        </span>
      ))}
    </span>
  )
}

/** Colors every "Google" / "GOOGLE" occurrence inside a string. */
export function ColorGoogle({ text, className = '' }) {
  if (text == null || text === '') return null

  const parts = String(text).split(/(Google|GOOGLE)/g)

  return (
    <span className={className}>
      {parts.map((part, index) =>
        part === 'Google' || part === 'GOOGLE' ? (
          <GoogleText key={index}>{part}</GoogleText>
        ) : (
          part
        ),
      )}
    </span>
  )
}
