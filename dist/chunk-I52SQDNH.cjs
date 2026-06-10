"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Input/Input.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var Input = _react2.default.forwardRef(
  ({ className, inputClassName, placeholderClassName, placeholder, ...props }, ref) => {
    const hasAccessibleName = props["aria-label"] || props["aria-labelledby"] || props.id;
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "span", { className, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "input",
        {
          ref,
          className: inputClassName,
          ...props,
          "aria-label": !hasAccessibleName && placeholder ? placeholder : props["aria-label"]
        }
      ),
      placeholder ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", className: placeholderClassName, children: placeholder }) : null
    ] });
  }
);
Input.displayName = "Input";



exports.Input = Input;
