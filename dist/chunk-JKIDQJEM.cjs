"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/PasswordInput/PasswordInput.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var PasswordInput = _react2.default.forwardRef(
  ({
    visible: visibleProp,
    defaultVisible = false,
    onVisibilityChange,
    toggleLabel,
    toggleAriaLabel,
    inputClassName,
    inputStyle,
    toggleClassName,
    toggleStyle,
    className,
    style,
    disabled,
    ...inputProps
  }, ref) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(defaultVisible);
    const controlled = visibleProp !== void 0;
    const visible = controlled ? !!visibleProp : uncontrolled;
    const setVisible = (v) => {
      if (!controlled) setUncontrolled(v);
      _optionalChain([onVisibilityChange, 'optionalCall', _ => _(v)]);
    };
    const label = toggleLabel ? toggleLabel(visible) : visible ? "Hide" : "Show";
    const ariaLabel = toggleAriaLabel ? toggleAriaLabel(visible) : visible ? "Hide password" : "Show password";
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { "data-disabled": disabled || void 0, className, style, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "input",
        {
          ref,
          type: visible ? "text" : "password",
          disabled,
          className: inputClassName,
          style: inputStyle,
          ...inputProps
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "button",
        {
          type: "button",
          "aria-label": ariaLabel,
          "aria-pressed": visible,
          "data-state": visible ? "visible" : "hidden",
          onClick: () => setVisible(!visible),
          disabled,
          tabIndex: -1,
          className: toggleClassName,
          style: toggleStyle,
          children: label
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";



exports.PasswordInput = PasswordInput;
