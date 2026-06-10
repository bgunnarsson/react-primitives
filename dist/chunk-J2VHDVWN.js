// src/components/Link/Link.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Link = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("a", { ref, className, ...props }));
Link.displayName = "Link";

export {
  Link
};
