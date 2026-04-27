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
} // src/components/Stepper/Stepper.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var StepperContext = _react2.default.createContext({ value: 1, orientation: 'horizontal' })
var Stepper = ({ value, orientation = 'horizontal', ...props }) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StepperContext.Provider, {
    value: { value, orientation },
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'ol', {
      'data-orientation': orientation,
      'aria-label': 'Progress',
      ...props,
    }),
  })
var StepperItemContext = _react2.default.createContext({ step: 1, state: 'pending' })
var StepperItem = ({ step, ...props }) => {
  const { value } = _react2.default.useContext(StepperContext)
  const state = step === value ? 'active' : step < value ? 'completed' : 'pending'
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, StepperItemContext.Provider, {
    value: { step, state },
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'li', { 'data-state': state, 'data-step': step, ...props }),
  })
}
var StepperIndicator = (props) => {
  const { step, state } = _react2.default.useContext(StepperItemContext)
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'span', {
    'data-state': state,
    'aria-hidden': 'true',
    ...props,
    children: _nullishCoalesce(props.children, () => (state === 'completed' ? '\u2713' : step)),
  })
}
var StepperTitle = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'p', { ...props })
var StepperDescription = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'p', { ...props })
var StepperSeparator = (props) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { 'aria-hidden': 'true', ...props })

exports.Stepper = Stepper
exports.StepperItem = StepperItem
exports.StepperIndicator = StepperIndicator
exports.StepperTitle = StepperTitle
exports.StepperDescription = StepperDescription
exports.StepperSeparator = StepperSeparator
