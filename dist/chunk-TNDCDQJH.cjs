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
} // src/components/AspectRatio/AspectRatio.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactaspectratio = require('@radix-ui/react-aspect-ratio')
var RadixAspectRatio = _interopRequireWildcard(_reactaspectratio)
var _jsxruntime = require('react/jsx-runtime')
var AspectRatio = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAspectRatio.Root, { ref, className, ...props })
)
AspectRatio.displayName = 'AspectRatio'

exports.AspectRatio = AspectRatio
