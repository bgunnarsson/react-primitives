// src/components/VirtualList/VirtualList.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var computeOffsets = (count, itemSize) => {
  if (typeof itemSize === "number") {
    return { offsets: null, total: count * itemSize, fixed: itemSize };
  }
  const offsets = new Array(count + 1);
  offsets[0] = 0;
  for (let i = 0; i < count; i++) offsets[i + 1] = offsets[i] + itemSize(i);
  return { offsets, total: offsets[count], fixed: 0 };
};
var findStartIndex = (offsets, scroll) => {
  let lo = 0;
  let hi = offsets.length - 1;
  while (lo < hi) {
    const mid = lo + hi >>> 1;
    if (offsets[mid + 1] <= scroll) lo = mid + 1;
    else hi = mid;
  }
  return lo;
};
function VirtualListInner({
  items,
  itemSize,
  children,
  overscan = 4,
  height,
  getItemKey,
  orientation = "vertical",
  style,
  onScroll,
  ...rest
}, ref) {
  const innerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => innerRef.current, []);
  const horizontal = orientation === "horizontal";
  const [scroll, setScroll] = React.useState(0);
  const [viewport, setViewport] = React.useState(0);
  React.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => setViewport(horizontal ? el.clientWidth : el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [horizontal]);
  const { offsets, total, fixed } = React.useMemo(
    () => computeOffsets(items.length, itemSize),
    [items.length, itemSize]
  );
  const startIndex = (() => {
    if (items.length === 0) return 0;
    if (offsets) return Math.max(0, findStartIndex(offsets, scroll) - overscan);
    return Math.max(0, Math.floor(scroll / fixed) - overscan);
  })();
  const endIndex = (() => {
    if (items.length === 0) return 0;
    const target = scroll + viewport;
    if (offsets) return Math.min(items.length, findStartIndex(offsets, target) + 1 + overscan);
    return Math.min(items.length, Math.ceil(target / fixed) + overscan);
  })();
  const handleScroll = (e) => {
    const el = e.currentTarget;
    setScroll(horizontal ? el.scrollLeft : el.scrollTop);
    onScroll?.(e);
  };
  const visible = [];
  for (let i = startIndex; i < endIndex; i++) {
    const start = offsets ? offsets[i] : i * fixed;
    const size = offsets ? offsets[i + 1] - offsets[i] : fixed;
    const itemStyle = horizontal ? { position: "absolute", top: 0, bottom: 0, left: 0, transform: `translateX(${start}px)`, width: size } : { position: "absolute", left: 0, right: 0, top: 0, transform: `translateY(${start}px)`, height: size };
    visible.push(
      /* @__PURE__ */ jsx(React.Fragment, { children: children({ item: items[i], index: i, style: itemStyle }) }, getItemKey ? getItemKey(items[i], i) : i)
    );
  }
  const scrollerStyle = {
    overflow: "auto",
    position: "relative",
    ...horizontal ? { width: height ?? "100%" } : { height: height ?? "100%" },
    ...style
  };
  const spacerStyle = horizontal ? { position: "relative", width: total, height: "100%" } : { position: "relative", height: total, width: "100%" };
  return /* @__PURE__ */ jsx("div", { ref: innerRef, onScroll: handleScroll, style: scrollerStyle, ...rest, children: /* @__PURE__ */ jsx("div", { style: spacerStyle, children: visible }) });
}
var VirtualList = React.forwardRef(VirtualListInner);

export {
  VirtualList
};
