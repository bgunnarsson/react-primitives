// src/components/PasswordInput/PasswordInput.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var PasswordInput = React.forwardRef(
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
    const [uncontrolled, setUncontrolled] = React.useState(defaultVisible);
    const controlled = visibleProp !== void 0;
    const visible = controlled ? !!visibleProp : uncontrolled;
    const setVisible = (v) => {
      if (!controlled) setUncontrolled(v);
      onVisibilityChange?.(v);
    };
    const label = toggleLabel ? toggleLabel(visible) : visible ? "Hide" : "Show";
    const ariaLabel = toggleAriaLabel ? toggleAriaLabel(visible) : visible ? "Hide password" : "Show password";
    return /* @__PURE__ */ jsxs("div", { "data-disabled": disabled || void 0, className, style, children: [
      /* @__PURE__ */ jsx(
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
      /* @__PURE__ */ jsx(
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

export {
  PasswordInput
};
