// src/components/Button/Button.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("button", { ref, className, ...props }));
Button.displayName = "Button";

export {
  Button
};
