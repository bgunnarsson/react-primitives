// src/components/NumberInput/NumberInput.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var NumberInput = React.forwardRef(
  ({ value, onChange, min, max, step = 1, disabled, className, ...props }, ref) => {
    const clamp = (n) => {
      let v = n;
      if (min !== void 0) v = Math.max(min, v);
      if (max !== void 0) v = Math.min(max, v);
      return v;
    };
    const handleChange = (e) => {
      const n = parseFloat(e.target.value);
      if (!isNaN(n)) onChange?.(clamp(n));
    };
    const increment = () => onChange?.(clamp((value ?? 0) + step));
    const decrement = () => onChange?.(clamp((value ?? 0) - step));
    return /* @__PURE__ */ jsxs("div", { "data-disabled": disabled || void 0, className, children: [
      /* @__PURE__ */ jsx("button", { type: "button", onClick: decrement, disabled: disabled || min !== void 0 && (value ?? 0) <= min, tabIndex: -1, children: "\u2212" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          type: "number",
          value: value ?? "",
          onChange: handleChange,
          min,
          max,
          step,
          disabled,
          ...props
        }
      ),
      /* @__PURE__ */ jsx("button", { type: "button", onClick: increment, disabled: disabled || max !== void 0 && (value ?? 0) >= max, tabIndex: -1, children: "+" })
    ] });
  }
);
NumberInput.displayName = "NumberInput";

export {
  NumberInput
};
//# sourceMappingURL=chunk-22CLBKDF.js.map