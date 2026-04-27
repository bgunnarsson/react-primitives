// src/components/Box/Box.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var Box = React.forwardRef(({ as: Tag = "div", ...props }, ref) => {
  const Component = Tag;
  return /* @__PURE__ */ jsx(Component, { ref, ...props });
});
Box.displayName = "Box";

export {
  Box
};
