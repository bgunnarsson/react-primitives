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
} // src/components/Separator/Separator.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactseparator = require('@radix-ui/react-separator')
var RadixSeparator = _interopRequireWildcard(_reactseparator)
var _jsxruntime = require('react/jsx-runtime')
var Separator = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSeparator.Root, { ref, className, ...props })
)
Separator.displayName = 'Separator'

exports.Separator = Separator
