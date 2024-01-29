import { useMemo } from 'react'
import { usePreferredDark } from './usePreferredDark'
import type { ColorMode } from './ToggleTheme'

export function useDark(mode: ColorMode) {
  const preferredDark = usePreferredDark()
  const isDark = useMemo(() => {
    return mode === 'dark' || (preferredDark && mode !== 'light')
  }, [mode, preferredDark])

  return isDark
}
