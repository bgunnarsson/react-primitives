'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
} // src/components/Box/Box.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var Box = _react2.default.forwardRef(({ as: Tag = 'div', ...props }, ref) => {
  const Component = Tag
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Component, { ref, ...props })
})
Box.displayName = 'Box'

exports.Box = Box
