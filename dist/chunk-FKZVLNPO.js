// src/components/Card/Card.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Card = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, ...props }));
Card.displayName = "Card";
var CardContent = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, ...props }));
CardContent.displayName = "CardContent";

export {
  Card,
  CardContent
};
