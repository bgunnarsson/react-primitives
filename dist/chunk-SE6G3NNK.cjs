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
} // src/components/Tooltip/Tooltip.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reacttooltip = require('@radix-ui/react-tooltip')
var RadixTooltip = _interopRequireWildcard(_reacttooltip)
var _jsxruntime = require('react/jsx-runtime')
var Tooltip = ({ delayDuration = 200, children, ...props }) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTooltip.Provider, {
    delayDuration,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTooltip.Root, { ...props, children }),
  })
var TooltipTrigger = RadixTooltip.Trigger
var TooltipContent = _react2.default.forwardRef(({ className, sideOffset = 4, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTooltip.Portal, {
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTooltip.Content, {
      ref,
      sideOffset,
      className,
      ...props,
    }),
  })
)
TooltipContent.displayName = 'TooltipContent'

exports.Tooltip = Tooltip
exports.TooltipTrigger = TooltipTrigger
exports.TooltipContent = TooltipContent
