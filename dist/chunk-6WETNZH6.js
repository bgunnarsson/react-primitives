// src/components/Mention/Mention.tsx
import React from 'react'
import { Fragment, jsx } from 'react/jsx-runtime'
function getTriggerContext(el, trigger) {
  const pos = el.selectionStart ?? el.value.length
  const before = el.value.slice(0, pos)
  let i = pos - 1
  while (i >= 0) {
    const c = before[i]
    if (c === trigger) {
      if (i === 0 || /\s/.test(before[i - 1])) {
        return { triggerIndex: i, query: before.slice(i + 1, pos), endIndex: pos }
      }
      return null
    }
    if (/\s/.test(c)) return null
    i--
  }
  return null
}
function Mention({
  trigger = '@',
  value,
  onValueChange,
  items,
  onQueryChange,
  format,
  appendSpace = true,
  onSelect,
  children,
}) {
  const inputRef = React.useRef(null)
  const [ctx, setCtx] = React.useState(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const open = ctx !== null && items.length > 0
  React.useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(items.length === 0 ? 0 : items.length - 1)
  }, [items.length, activeIndex])
  React.useEffect(() => {
    onQueryChange?.(ctx?.query ?? '')
  }, [ctx?.query, onQueryChange])
  const refresh = React.useCallback(() => {
    const el = inputRef.current
    if (!el) {
      setCtx(null)
      return
    }
    const next = getTriggerContext(el, trigger)
    setCtx(next)
    if (next) setActiveIndex(0)
  }, [trigger])
  const close = React.useCallback(() => setCtx(null), [])
  const selectItem = React.useCallback(
    (item) => {
      const el = inputRef.current
      if (!el || !ctx) return
      const insertion = format(item) + (appendSpace ? ' ' : '')
      const next = value.slice(0, ctx.triggerIndex) + insertion + value.slice(ctx.endIndex)
      const cursor = ctx.triggerIndex + insertion.length
      onValueChange(next)
      onSelect?.(item)
      setCtx(null)
      requestAnimationFrame(() => {
        const node = inputRef.current
        if (node) {
          node.focus()
          node.setSelectionRange(cursor, cursor)
        }
      })
    },
    [ctx, value, format, appendSpace, onValueChange, onSelect]
  )
  const setRef = React.useCallback((node) => {
    inputRef.current = node
  }, [])
  const api = {
    open,
    query: ctx?.query ?? '',
    activeIndex,
    setActiveIndex,
    selectItem,
    close,
    getInputProps: () => ({
      ref: setRef,
      value,
      onChange: (e) => {
        onValueChange(e.target.value)
        requestAnimationFrame(refresh)
      },
      onKeyUp: () => refresh(),
      onClick: () => refresh(),
      onBlur: () => {
        setTimeout(() => setCtx(null), 0)
      },
      onKeyDown: (e) => {
        if (!open) return
        if (e.key === 'ArrowDown') {
          e.preventDefault()
          setActiveIndex((activeIndex + 1) % items.length)
        } else if (e.key === 'ArrowUp') {
          e.preventDefault()
          setActiveIndex((activeIndex - 1 + items.length) % items.length)
        } else if (e.key === 'Enter' || e.key === 'Tab') {
          if (items[activeIndex] !== void 0) {
            e.preventDefault()
            selectItem(items[activeIndex])
          }
        } else if (e.key === 'Escape') {
          e.preventDefault()
          setCtx(null)
        }
      },
    }),
    getListProps: () => ({
      role: 'listbox',
      onMouseDown: (e) => e.preventDefault(),
    }),
    getItemProps: ({ index, item }) => ({
      role: 'option',
      'aria-selected': index === activeIndex,
      'data-active': index === activeIndex ? true : void 0,
      onMouseEnter: () => setActiveIndex(index),
      onMouseDown: (e) => e.preventDefault(),
      onClick: () => selectItem(item),
    }),
  }
  return /* @__PURE__ */ jsx(Fragment, { children: children(api) })
}

export { Mention }
