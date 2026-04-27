import React from 'react'

export interface VirtualListItem {
  index: number
  start: number
  size: number
}

export interface VirtualListRenderProps<T> {
  item: T
  index: number
  /** Inline style positioning the row absolutely within the inner spacer. Spread it onto your row. */
  style: React.CSSProperties
}

export interface VirtualListProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  items: readonly T[]
  /** Pixel height of each row. Pass a function for variable heights. */
  itemSize: number | ((index: number) => number)
  /** Renders a single row. The returned element should spread `style` to position itself. */
  children: (props: VirtualListRenderProps<T>) => React.ReactNode
  /** Extra rows to render above/below the visible window. */
  overscan?: number
  /** Required when no fixed CSS height is set on the scroller. */
  height?: number | string
  /** Stable key for each item (defaults to index). */
  getItemKey?: (item: T, index: number) => React.Key
  /** Direction to virtualize. `vertical` is the default. */
  orientation?: 'vertical' | 'horizontal'
}

const computeOffsets = (count: number, itemSize: number | ((i: number) => number)) => {
  if (typeof itemSize === 'number') {
    return { offsets: null as null, total: count * itemSize, fixed: itemSize }
  }
  const offsets = new Array<number>(count + 1)
  offsets[0] = 0
  for (let i = 0; i < count; i++) offsets[i + 1] = offsets[i] + itemSize(i)
  return { offsets, total: offsets[count], fixed: 0 }
}

const findStartIndex = (offsets: number[], scroll: number) => {
  let lo = 0
  let hi = offsets.length - 1
  while (lo < hi) {
    const mid = (lo + hi) >>> 1
    if (offsets[mid + 1] <= scroll) lo = mid + 1
    else hi = mid
  }
  return lo
}

function VirtualListInner<T>(
  {
    items,
    itemSize,
    children,
    overscan = 4,
    height,
    getItemKey,
    orientation = 'vertical',
    style,
    onScroll,
    ...rest
  }: VirtualListProps<T>,
  ref: React.Ref<HTMLDivElement>
) {
  const innerRef = React.useRef<HTMLDivElement>(null)
  React.useImperativeHandle(ref, () => innerRef.current!, [])

  const horizontal = orientation === 'horizontal'
  const [scroll, setScroll] = React.useState(0)
  const [viewport, setViewport] = React.useState(0)

  React.useEffect(() => {
    const el = innerRef.current
    if (!el) return
    const update = () => setViewport(horizontal ? el.clientWidth : el.clientHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [horizontal])

  const { offsets, total, fixed } = React.useMemo(
    () => computeOffsets(items.length, itemSize),
    [items.length, itemSize]
  )

  const startIndex = (() => {
    if (items.length === 0) return 0
    if (offsets) return Math.max(0, findStartIndex(offsets, scroll) - overscan)
    return Math.max(0, Math.floor(scroll / fixed) - overscan)
  })()

  const endIndex = (() => {
    if (items.length === 0) return 0
    const target = scroll + viewport
    if (offsets) return Math.min(items.length, findStartIndex(offsets, target) + 1 + overscan)
    return Math.min(items.length, Math.ceil(target / fixed) + overscan)
  })()

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    setScroll(horizontal ? el.scrollLeft : el.scrollTop)
    onScroll?.(e)
  }

  const visible: React.ReactNode[] = []
  for (let i = startIndex; i < endIndex; i++) {
    const start = offsets ? offsets[i] : i * fixed
    const size = offsets ? offsets[i + 1] - offsets[i] : fixed
    const itemStyle: React.CSSProperties = horizontal
      ? { position: 'absolute', top: 0, bottom: 0, left: 0, transform: `translateX(${start}px)`, width: size }
      : { position: 'absolute', left: 0, right: 0, top: 0, transform: `translateY(${start}px)`, height: size }
    visible.push(
      <React.Fragment key={getItemKey ? getItemKey(items[i], i) : i}>
        {children({ item: items[i], index: i, style: itemStyle })}
      </React.Fragment>
    )
  }

  const scrollerStyle: React.CSSProperties = {
    overflow: 'auto',
    position: 'relative',
    ...(horizontal ? { width: height ?? '100%' } : { height: height ?? '100%' }),
    ...style,
  }

  const spacerStyle: React.CSSProperties = horizontal
    ? { position: 'relative', width: total, height: '100%' }
    : { position: 'relative', height: total, width: '100%' }

  return (
    <div ref={innerRef} onScroll={handleScroll} style={scrollerStyle} {...rest}>
      <div style={spacerStyle}>{visible}</div>
    </div>
  )
}

export const VirtualList = React.forwardRef(VirtualListInner) as <T>(
  props: VirtualListProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement
