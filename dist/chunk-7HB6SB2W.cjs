"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Stack/Stack.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var ALIGN = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
};
var JUSTIFY = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly"
};
var Stack = _react2.default.forwardRef(
  ({ as: Tag = "div", direction, align, justify, wrap, gap, inline, style, ...props }, ref) => {
    const composed = {
      display: inline ? "inline-flex" : "flex",
      flexDirection: direction,
      alignItems: align ? ALIGN[align] : void 0,
      justifyContent: justify ? JUSTIFY[justify] : void 0,
      flexWrap: wrap,
      gap,
      ...style
    };
    const Component = Tag;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Component, { ref, "data-direction": direction, style: composed, ...props });
  }
);
Stack.displayName = "Stack";
var Flex = Stack;




exports.Stack = Stack; exports.Flex = Flex;
