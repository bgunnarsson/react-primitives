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
} // src/components/Status/Status.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var Status = _react2.default.forwardRef(({ value, label, showLabel = false, children, ...rest }, ref) => {
  const visualLabel = _nullishCoalesce(label, () => (typeof value === 'string' ? value : void 0))
  const hasChildren = _react2.default.Children.count(children) > 0
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', {
    ref,
    role: 'status',
    'data-status': value,
    'aria-label': !showLabel && !hasChildren ? visualLabel : label,
    ...rest,
    children: hasChildren
      ? children
      : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _jsxruntime.Fragment, {
          children: [
            /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StatusIndicator, {}),
            showLabel && visualLabel
              ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StatusLabel, { children: visualLabel })
              : null,
          ],
        }),
  })
})
Status.displayName = 'Status'
var StatusIndicator = _react2.default.forwardRef((props, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', {
    ref,
    'aria-hidden': 'true',
    'data-part': 'indicator',
    ...props,
  })
)
StatusIndicator.displayName = 'StatusIndicator'
var StatusLabel = _react2.default.forwardRef((props, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', { ref, 'data-part': 'label', ...props })
)
StatusLabel.displayName = 'StatusLabel'

exports.Status = Status
exports.StatusIndicator = StatusIndicator
exports.StatusLabel = StatusLabel
