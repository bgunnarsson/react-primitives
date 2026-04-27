"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/VirtualList/VirtualList.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
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
  const innerRef = _react2.default.useRef(null);
  _react2.default.useImperativeHandle(ref, () => innerRef.current, []);
  const horizontal = orientation === "horizontal";
  const [scroll, setScroll] = _react2.default.useState(0);
  const [viewport, setViewport] = _react2.default.useState(0);
  _react2.default.useEffect(() => {
    const el = innerRef.current;
    if (!el) return;
    const update = () => setViewport(horizontal ? el.clientWidth : el.clientHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [horizontal]);
  const { offsets, total, fixed } = _react2.default.useMemo(
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
    _optionalChain([onScroll, 'optionalCall', _ => _(e)]);
  };
  const visible = [];
  for (let i = startIndex; i < endIndex; i++) {
    const start = offsets ? offsets[i] : i * fixed;
    const size = offsets ? offsets[i + 1] - offsets[i] : fixed;
    const itemStyle = horizontal ? { position: "absolute", top: 0, bottom: 0, left: 0, transform: `translateX(${start}px)`, width: size } : { position: "absolute", left: 0, right: 0, top: 0, transform: `translateY(${start}px)`, height: size };
    visible.push(
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _react2.default.Fragment, { children: children({ item: items[i], index: i, style: itemStyle }) }, getItemKey ? getItemKey(items[i], i) : i)
    );
  }
  const scrollerStyle = {
    overflow: "auto",
    position: "relative",
    ...horizontal ? { width: _nullishCoalesce(height, () => ( "100%")) } : { height: _nullishCoalesce(height, () => ( "100%")) },
    ...style
  };
  const spacerStyle = horizontal ? { position: "relative", width: total, height: "100%" } : { position: "relative", height: total, width: "100%" };
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref: innerRef, onScroll: handleScroll, style: scrollerStyle, ...rest, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { style: spacerStyle, children: visible }) });
}
var VirtualList = _react2.default.forwardRef(VirtualListInner);



exports.VirtualList = VirtualList;
