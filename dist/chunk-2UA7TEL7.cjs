"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/NumberInput/NumberInput.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var NumberInput = _react2.default.forwardRef(
  ({ value, onChange, min, max, step = 1, disabled, className, ...props }, ref) => {
    const clamp = (n) => {
      let v = n;
      if (min !== void 0) v = Math.max(min, v);
      if (max !== void 0) v = Math.min(max, v);
      return v;
    };
    const handleChange = (e) => {
      const n = parseFloat(e.target.value);
      if (!isNaN(n)) _optionalChain([onChange, 'optionalCall', _ => _(clamp(n))]);
    };
    const increment = () => _optionalChain([onChange, 'optionalCall', _2 => _2(clamp((_nullishCoalesce(value, () => ( 0))) + step))]);
    const decrement = () => _optionalChain([onChange, 'optionalCall', _3 => _3(clamp((_nullishCoalesce(value, () => ( 0))) - step))]);
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { "data-disabled": disabled || void 0, className, children: [
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { type: "button", onClick: decrement, disabled: disabled || min !== void 0 && (_nullishCoalesce(value, () => ( 0))) <= min, tabIndex: -1, children: "\u2212" }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
        "input",
        {
          ref,
          type: "number",
          value: _nullishCoalesce(value, () => ( "")),
          onChange: handleChange,
          min,
          max,
          step,
          disabled,
          ...props
        }
      ),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { type: "button", onClick: increment, disabled: disabled || max !== void 0 && (_nullishCoalesce(value, () => ( 0))) >= max, tabIndex: -1, children: "+" })
    ] });
  }
);
NumberInput.displayName = "NumberInput";



exports.NumberInput = NumberInput;
//# sourceMappingURL=chunk-2UA7TEL7.cjs.map