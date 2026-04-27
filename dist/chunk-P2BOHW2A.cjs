'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
} // src/components/InputOTP/InputOTP.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _inputotp = require('input-otp')

var _jsxruntime = require('react/jsx-runtime')
var InputOTP = _react2.default.forwardRef((props, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _inputotp.OTPInput, { ref, ...props })
)
InputOTP.displayName = 'InputOTP'
var InputOTPGroup = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { ref, className, ...props })
)
InputOTPGroup.displayName = 'InputOTPGroup'
var InputOTPSlot = _react2.default.forwardRef(({ index, className, ...props }, ref) => {
  const context = _react2.default.useContext(_inputotp.OTPInputContext)
  const slot = context.slots[index]
  if (!slot) return null
  const { char, hasFakeCaret, isActive } = slot
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'div', {
    ref,
    'data-active': isActive ? '' : void 0,
    className,
    ...props,
    children: [
      char,
      hasFakeCaret ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', { 'data-fake-caret': '' }) : null,
    ],
  })
})
InputOTPSlot.displayName = 'InputOTPSlot'
var InputOTPSeparator = _react2.default.forwardRef(({ className, children = '-', ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { ref, role: 'separator', className, ...props, children })
)
InputOTPSeparator.displayName = 'InputOTPSeparator'

exports.InputOTP = InputOTP
exports.InputOTPGroup = InputOTPGroup
exports.InputOTPSlot = InputOTPSlot
exports.InputOTPSeparator = InputOTPSeparator
exports.REGEXP_ONLY_CHARS = _inputotp.REGEXP_ONLY_CHARS
exports.REGEXP_ONLY_DIGITS = _inputotp.REGEXP_ONLY_DIGITS
exports.REGEXP_ONLY_DIGITS_AND_CHARS = _inputotp.REGEXP_ONLY_DIGITS_AND_CHARS
