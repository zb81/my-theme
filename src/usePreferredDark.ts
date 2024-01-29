import { useState } from 'react'

export function usePreferredDark() {
  const [matches, setMatches] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches)

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setMatches(e.matches)
  })

  return matches
}
