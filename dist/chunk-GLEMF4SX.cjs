"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/ScrollArea/ScrollArea.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactscrollarea = require('@radix-ui/react-scroll-area'); var RadixScrollArea = _interopRequireWildcard(_reactscrollarea);
var _jsxruntime = require('react/jsx-runtime');
var ScrollArea = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixScrollArea.Root, { ref, className, ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Viewport, { children }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Scrollbar, { orientation: "vertical", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Scrollbar, { orientation: "horizontal", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixScrollArea.Corner, {})
  ] })
);
ScrollArea.displayName = "ScrollArea";



exports.ScrollArea = ScrollArea;
