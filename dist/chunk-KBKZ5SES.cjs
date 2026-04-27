'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
}
function _optionalChain(ops) {
  let lastAccessLHS = undefined
  let value = ops[0]
  let i = 1
  while (i < ops.length) {
    const op = ops[i]
    const fn = ops[i + 1]
    i += 2
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value
      value = fn(value)
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args))
      lastAccessLHS = undefined
    }
  }
  return value
} // src/components/Mention/Mention.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
function getTriggerContext(el, trigger) {
  const pos = _nullishCoalesce(el.selectionStart, () => el.value.length)
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
  const inputRef = _react2.default.useRef(null)
  const [ctx, setCtx] = _react2.default.useState(null)
  const [activeIndex, setActiveIndex] = _react2.default.useState(0)
  const open = ctx !== null && items.length > 0
  _react2.default.useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(items.length === 0 ? 0 : items.length - 1)
  }, [items.length, activeIndex])
  _react2.default.useEffect(() => {
    _optionalChain([
      onQueryChange,
      'optionalCall',
      (_) => _(_nullishCoalesce(_optionalChain([ctx, 'optionalAccess', (_2) => _2.query]), () => '')),
    ])
  }, [_optionalChain([ctx, 'optionalAccess', (_3) => _3.query]), onQueryChange])
  const refresh = _react2.default.useCallback(() => {
    const el = inputRef.current
    if (!el) {
      setCtx(null)
      return
    }
    const next = getTriggerContext(el, trigger)
    setCtx(next)
    if (next) setActiveIndex(0)
  }, [trigger])
  const close = _react2.default.useCallback(() => setCtx(null), [])
  const selectItem = _react2.default.useCallback(
    (item) => {
      const el = inputRef.current
      if (!el || !ctx) return
      const insertion = format(item) + (appendSpace ? ' ' : '')
      const next = value.slice(0, ctx.triggerIndex) + insertion + value.slice(ctx.endIndex)
      const cursor = ctx.triggerIndex + insertion.length
      onValueChange(next)
      _optionalChain([onSelect, 'optionalCall', (_4) => _4(item)])
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
  const setRef = _react2.default.useCallback((node) => {
    inputRef.current = node
  }, [])
  const api = {
    open,
    query: _nullishCoalesce(_optionalChain([ctx, 'optionalAccess', (_5) => _5.query]), () => ''),
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
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _jsxruntime.Fragment, { children: children(api) })
}

exports.Mention = Mention
