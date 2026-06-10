// src/components/Grid/Grid.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Grid = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, ...props }));
Grid.displayName = "Grid";
var GridItem = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, ...props }));
GridItem.displayName = "GridItem";

export {
  Grid,
  GridItem
};
