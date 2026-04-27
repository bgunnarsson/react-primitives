import React from 'react'

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
  'audio[controls]',
  'video[controls]',
  'details > summary',
].join(',')

function isVisible(el: HTMLElement) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}

function getFocusable(root: HTMLElement): HTMLElement[] {
  const nodes = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
  return nodes.filter((n) => !n.hasAttribute('disabled') && isVisible(n))
}

export interface FocusScopeProps extends React.HTMLAttributes<HTMLDivElement> {
  trapped?: boolean
  autoFocus?: boolean
  restoreFocus?: boolean
  loop?: boolean
}

export const FocusScope = React.forwardRef<HTMLDivElement, FocusScopeProps>(
  ({ trapped = true, autoFocus = true, restoreFocus = true, loop = true, onKeyDown, children, ...rest }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const previouslyFocused = React.useRef<HTMLElement | null>(null)

    React.useImperativeHandle(ref, () => containerRef.current as HTMLDivElement, [])

    React.useEffect(() => {
      if (typeof document === 'undefined') {
        return
      }
      previouslyFocused.current = document.activeElement as HTMLElement | null
      const node = containerRef.current
      if (!node) {
        return
      }

      if (autoFocus) {
        const focusables = getFocusable(node)
        const target = focusables[0] ?? node
        if (target === node && !node.hasAttribute('tabindex')) {
          node.setAttribute('tabindex', '-1')
        }
        target.focus({ preventScroll: true })
      }

      return () => {
        if (restoreFocus) {
          const prev = previouslyFocused.current
          if (prev && document.contains(prev)) {
            prev.focus({ preventScroll: true })
          }
        }
      }
    }, [autoFocus, restoreFocus])

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e)
      if (e.defaultPrevented) {
        return
      }
      if (!trapped || e.key !== 'Tab') {
        return
      }
      const node = containerRef.current
      if (!node) {
        return
      }
      const focusables = getFocusable(node)
      if (focusables.length === 0) {
        e.preventDefault()
        return
      }
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (e.shiftKey) {
        if (active === first || !node.contains(active)) {
          e.preventDefault()
          if (loop) {
            last.focus()
          }
        }
      } else {
        if (active === last) {
          e.preventDefault()
          if (loop) {
            first.focus()
          }
        }
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: keyDown only intercepts Tab to trap focus among inner interactive elements
      <div ref={containerRef} onKeyDown={handleKeyDown} {...rest}>
        {children}
      </div>
    )
  }
)
FocusScope.displayName = 'FocusScope'
