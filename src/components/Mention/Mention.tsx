import React from 'react'

type MentionInputElement = HTMLInputElement | HTMLTextAreaElement

interface TriggerContext {
  triggerIndex: number
  query: string
  endIndex: number
}

function getTriggerContext(el: MentionInputElement, trigger: string): TriggerContext | null {
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

export interface MentionInputProps {
  ref: React.RefCallback<MentionInputElement>
  value: string
  onChange: (e: React.ChangeEvent<MentionInputElement>) => void
  onKeyDown: (e: React.KeyboardEvent<MentionInputElement>) => void
  onKeyUp: (e: React.KeyboardEvent<MentionInputElement>) => void
  onClick: (e: React.MouseEvent<MentionInputElement>) => void
  onBlur: (e: React.FocusEvent<MentionInputElement>) => void
}

export interface MentionListProps {
  role: 'listbox'
  onMouseDown: (e: React.MouseEvent) => void
}

export interface MentionItemProps {
  role: 'option'
  'aria-selected': boolean
  'data-active': true | undefined
  onMouseEnter: () => void
  onMouseDown: (e: React.MouseEvent) => void
  onClick: () => void
}

export interface MentionRenderProps<T> {
  open: boolean
  query: string
  activeIndex: number
  setActiveIndex: (i: number) => void
  selectItem: (item: T) => void
  close: () => void
  getInputProps: () => MentionInputProps
  getListProps: () => MentionListProps
  getItemProps: (args: { index: number; item: T }) => MentionItemProps
}

export interface MentionProps<T> {
  trigger?: string
  value: string
  onValueChange: (value: string) => void
  items: T[]
  onQueryChange?: (query: string) => void
  format: (item: T) => string
  appendSpace?: boolean
  onSelect?: (item: T) => void
  children: (api: MentionRenderProps<T>) => React.ReactNode
}

export function Mention<T>({
  trigger = '@',
  value,
  onValueChange,
  items,
  onQueryChange,
  format,
  appendSpace = true,
  onSelect,
  children,
}: MentionProps<T>) {
  const inputRef = React.useRef<MentionInputElement | null>(null)
  const [ctx, setCtx] = React.useState<TriggerContext | null>(null)
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
    (item: T) => {
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

  const setRef = React.useCallback((node: MentionInputElement | null) => {
    inputRef.current = node
  }, [])

  const api: MentionRenderProps<T> = {
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
          if (items[activeIndex] !== undefined) {
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
      'data-active': index === activeIndex ? true : undefined,
      onMouseEnter: () => setActiveIndex(index),
      onMouseDown: (e) => e.preventDefault(),
      onClick: () => selectItem(item),
    }),
  }

  return <>{children(api)}</>
}
