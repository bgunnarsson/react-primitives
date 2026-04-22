"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Switch/Switch.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactswitch = require('@radix-ui/react-switch'); var RadixSwitch = _interopRequireWildcard(_reactswitch);
var _jsxruntime = require('react/jsx-runtime');
var Switch = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSwitch.Root, { ref, className, ...props, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSwitch.Thumb, {}) })
);
Switch.displayName = "Switch";



exports.Switch = Switch;
