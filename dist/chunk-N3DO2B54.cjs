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
} // src/components/Toggle/Toggle.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reacttoggle = require('@radix-ui/react-toggle')
var RadixToggle = _interopRequireWildcard(_reacttoggle)
var _jsxruntime = require('react/jsx-runtime')
var Toggle = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixToggle.Root, { ref, className, ...props })
)
Toggle.displayName = 'Toggle'

exports.Toggle = Toggle
