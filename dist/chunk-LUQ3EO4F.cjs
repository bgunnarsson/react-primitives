"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Select/Select.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactselect = require('@radix-ui/react-select'); var RadixSelect = _interopRequireWildcard(_reactselect);
var _jsxruntime = require('react/jsx-runtime');
var Select = RadixSelect.Root;
var SelectGroup = RadixSelect.Group;
var SelectValue = RadixSelect.Value;
var SelectTrigger = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixSelect.Trigger, { ref, className, ...props, children: [
    children,
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Icon, {})
  ] })
);
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = _react2.default.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Content, { ref, position, className, ...props, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Viewport, { children }) }) })
);
SelectContent.displayName = "SelectContent";
var SelectItem = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixSelect.Item, { ref, className, ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.ItemText, { children }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.ItemIndicator, {})
  ] })
);
SelectItem.displayName = "SelectItem";
var SelectLabel = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Label, { ref, className, ...props })
);
SelectLabel.displayName = "SelectLabel";
var SelectSeparator = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixSelect.Separator, { ref, className, ...props })
);
SelectSeparator.displayName = "SelectSeparator";










exports.Select = Select; exports.SelectGroup = SelectGroup; exports.SelectValue = SelectValue; exports.SelectTrigger = SelectTrigger; exports.SelectContent = SelectContent; exports.SelectItem = SelectItem; exports.SelectLabel = SelectLabel; exports.SelectSeparator = SelectSeparator;
