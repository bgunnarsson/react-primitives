'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  } else {
    var newObj = {}
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          newObj[key] = obj[key]
        }
      }
    }
    newObj.default = obj
    return newObj
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
} // src/components/Progress/Progress.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactprogress = require('@radix-ui/react-progress')
var RadixProgress = _interopRequireWildcard(_reactprogress)
var _jsxruntime = require('react/jsx-runtime')
var Progress = _react2.default.forwardRef(({ className, value, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixProgress.Root, {
    ref,
    value,
    className,
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixProgress.Indicator, {
      style: { transform: `translateX(-${100 - _nullishCoalesce(value, () => 0)}%)` },
    }),
  })
)
Progress.displayName = 'Progress'

exports.Progress = Progress
