// src/components/Stat/Stat.tsx
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var Stat = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, ...props }));
Stat.displayName = "Stat";
var StatLabel = forwardRef((props, ref) => /* @__PURE__ */ jsx("p", { ref, ...props }));
StatLabel.displayName = "StatLabel";
var StatValue = forwardRef((props, ref) => /* @__PURE__ */ jsx("p", { ref, ...props }));
StatValue.displayName = "StatValue";
var StatHelpText = forwardRef((props, ref) => /* @__PURE__ */ jsx("p", { ref, ...props }));
StatHelpText.displayName = "StatHelpText";

export {
  Stat,
  StatLabel,
  StatValue,
  StatHelpText
};
