import { useState, useEffect, useCallback } from "react"

export function useLightbox(totalItems: number) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const isOpen = selectedIndex !== null

  const open = useCallback((index: number) => setSelectedIndex(index), [])
  const close = useCallback(() => setSelectedIndex(null), [])

  const prev = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : current > 0 ? current - 1 : totalItems - 1
    )
  }, [totalItems])

  const next = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? null : current < totalItems - 1 ? current + 1 : 0
    )
  }, [totalItems])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, close, prev, next])

  return { selectedIndex, isOpen, open, close, prev, next }
}
