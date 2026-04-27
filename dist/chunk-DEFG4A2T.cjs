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
} // src/components/TreeView/TreeView.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var TreeContext = _react2.default.createContext(null)
var useTreeContext = () => {
  const ctx = _react2.default.useContext(TreeContext)
  if (!ctx) throw new Error('TreeView parts must be rendered inside <TreeView>')
  return ctx
}
var TreeView = _react2.default.forwardRef(
  (
    { defaultExpanded, expanded: expandedProp, onExpandedChange, selected, onSelectedChange, children, ...props },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(
      () => new Set(_nullishCoalesce(defaultExpanded, () => []))
    )
    const controlled = expandedProp !== void 0
    const expanded = controlled ? new Set(expandedProp) : uncontrolled
    const toggle = (id) => {
      const next = new Set(expanded)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      if (!controlled) setUncontrolled(next)
      _optionalChain([onExpandedChange, 'optionalCall', (_) => _(Array.from(next))])
    }
    const value = {
      expanded,
      toggle,
      selected,
      onSelect: onSelectedChange,
    }
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TreeContext.Provider, {
      value,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'ul', { ref, role: 'tree', ...props, children }),
    })
  }
)
TreeView.displayName = 'TreeView'
var TreeItem = _react2.default.forwardRef(
  ({ id, label, disabled, children, labelClassName, labelStyle, className, style, ...props }, ref) => {
    const ctx = useTreeContext()
    const hasChildren = _react2.default.Children.count(children) > 0
    const isExpanded = ctx.expanded.has(id)
    const isSelected = ctx.selected === id
    const onKeyDown = (e) => {
      if (disabled) return
      if (e.key === 'ArrowRight' && hasChildren && !isExpanded) {
        e.preventDefault()
        ctx.toggle(id)
      } else if (e.key === 'ArrowLeft' && hasChildren && isExpanded) {
        e.preventDefault()
        ctx.toggle(id)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (hasChildren) ctx.toggle(id)
        _optionalChain([ctx, 'access', (_2) => _2.onSelect, 'optionalCall', (_3) => _3(id)])
      }
    }
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'li', {
      ref,
      role: 'treeitem',
      'aria-expanded': hasChildren ? isExpanded : void 0,
      'aria-selected': isSelected || void 0,
      'aria-disabled': disabled || void 0,
      className,
      style,
      ...props,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', {
          role: 'button',
          tabIndex: disabled ? -1 : 0,
          className: labelClassName,
          style: labelStyle,
          'data-selected': isSelected ? '' : void 0,
          'data-expanded': isExpanded ? '' : void 0,
          'data-has-children': hasChildren ? '' : void 0,
          onKeyDown,
          onClick: () => {
            if (disabled) return
            if (hasChildren) ctx.toggle(id)
            _optionalChain([ctx, 'access', (_4) => _4.onSelect, 'optionalCall', (_5) => _5(id)])
          },
          children: label,
        }),
        hasChildren && isExpanded
          ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'ul', { role: 'group', children })
          : null,
      ],
    })
  }
)
TreeItem.displayName = 'TreeItem'

exports.TreeView = TreeView
exports.TreeItem = TreeItem
