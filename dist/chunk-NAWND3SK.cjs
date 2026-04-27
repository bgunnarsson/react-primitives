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
} // src/components/Checkbox/Checkbox.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _reactcheckbox = require('@radix-ui/react-checkbox')
var RadixCheckbox = _interopRequireWildcard(_reactcheckbox)
var _jsxruntime = require('react/jsx-runtime')
var Checkbox = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixCheckbox.Root, {
    ref,
    className,
    ...props,
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixCheckbox.Indicator, {
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'svg', {
        width: '10',
        height: '8',
        viewBox: '0 0 10 8',
        fill: 'none',
        children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'path', {
          d: 'M1 4L3.5 6.5L9 1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      }),
    }),
  })
)
Checkbox.displayName = 'Checkbox'

exports.Checkbox = Checkbox
