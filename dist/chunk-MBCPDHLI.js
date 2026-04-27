// src/components/FocusScope/FocusScope.tsx
import React from 'react'
import { jsx } from 'react/jsx-runtime'
var FOCUSABLE_SELECTOR = [
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
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
}
function getFocusable(root) {
  const nodes = Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR))
  return nodes.filter((n) => !n.hasAttribute('disabled') && isVisible(n))
}
var FocusScope = React.forwardRef(
  ({ trapped = true, autoFocus = true, restoreFocus = true, loop = true, onKeyDown, children, ...rest }, ref) => {
    const containerRef = React.useRef(null)
    const previouslyFocused = React.useRef(null)
    React.useImperativeHandle(ref, () => containerRef.current, [])
    React.useEffect(() => {
      if (typeof document === 'undefined') return
      previouslyFocused.current = document.activeElement
      const node = containerRef.current
      if (!node) return
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
    const handleKeyDown = (e) => {
      onKeyDown?.(e)
      if (e.defaultPrevented) return
      if (!trapped || e.key !== 'Tab') return
      const node = containerRef.current
      if (!node) return
      const focusables = getFocusable(node)
      if (focusables.length === 0) {
        e.preventDefault()
        return
      }
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const active = document.activeElement
      if (e.shiftKey) {
        if (active === first || !node.contains(active)) {
          e.preventDefault()
          if (loop) last.focus()
        }
      } else {
        if (active === last) {
          e.preventDefault()
          if (loop) first.focus()
        }
      }
    }
    return /* @__PURE__ */ jsx('div', { ref: containerRef, onKeyDown: handleKeyDown, ...rest, children })
  }
)
FocusScope.displayName = 'FocusScope'

export { FocusScope }
