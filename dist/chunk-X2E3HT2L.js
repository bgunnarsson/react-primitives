// src/components/Kbd/Kbd.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var Kbd = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx("kbd", { ref, className, ...props, children }));
Kbd.displayName = "Kbd";

export {
  Kbd
};
