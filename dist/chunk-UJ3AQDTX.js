// src/components/Input/Input.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, inputClassName, placeholderClassName, placeholder, ...props }, ref) => {
    const hasAccessibleName = props["aria-label"] || props["aria-labelledby"] || props.id;
    return /* @__PURE__ */ jsxs("span", { className, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          className: inputClassName,
          placeholder,
          ...props,
          "aria-label": !hasAccessibleName && placeholder ? placeholder : props["aria-label"]
        }
      ),
      placeholder ? /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: placeholderClassName, children: placeholder }) : null
    ] });
  }
);
Input.displayName = "Input";

export {
  Input
};
