// src/components/Label/Label.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Label = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("label", { ref, className, ...props }));
Label.displayName = "Label";

export {
  Label
};
