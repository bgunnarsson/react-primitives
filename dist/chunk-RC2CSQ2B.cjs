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
} // src/components/HoverCard/HoverCard.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reacthovercard = require('@radix-ui/react-hover-card')
var RadixHoverCard = _interopRequireWildcard(_reacthovercard)
var _jsxruntime = require('react/jsx-runtime')
var HoverCard = RadixHoverCard.Root
var HoverCardTrigger = RadixHoverCard.Trigger
var HoverCardContent = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixHoverCard.Portal, {
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixHoverCard.Content, { ref, className, ...props }),
  })
)
HoverCardContent.displayName = 'HoverCardContent'

exports.HoverCard = HoverCard
exports.HoverCardTrigger = HoverCardTrigger
exports.HoverCardContent = HoverCardContent
