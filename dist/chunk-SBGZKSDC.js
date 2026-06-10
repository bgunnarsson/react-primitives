// src/components/Nav/Nav.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Nav = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("nav", { ref, className, ...props }));
Nav.displayName = "Nav";
var NavList = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("ul", { ref, className, ...props }));
NavList.displayName = "NavList";
var NavItem = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("li", { ref, className, ...props }));
NavItem.displayName = "NavItem";

export {
  Nav,
  NavList,
  NavItem
};
