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
} // src/components/Portal/Portal.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactportal = require('@radix-ui/react-portal')
var RadixPortal = _interopRequireWildcard(_reactportal)
var _jsxruntime = require('react/jsx-runtime')
var Portal = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixPortal.Root, { ref, className, ...props })
)
Portal.displayName = 'Portal'

exports.Portal = Portal
