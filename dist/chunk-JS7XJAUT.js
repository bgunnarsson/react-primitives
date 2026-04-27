// src/components/Stack/Stack.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var ALIGN = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
};
var JUSTIFY = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly"
};
var Stack = React.forwardRef(
  ({ as: Tag = "div", direction, align, justify, wrap, gap, inline, style, ...props }, ref) => {
    const composed = {
      display: inline ? "inline-flex" : "flex",
      flexDirection: direction,
      alignItems: align ? ALIGN[align] : void 0,
      justifyContent: justify ? JUSTIFY[justify] : void 0,
      flexWrap: wrap,
      gap,
      ...style
    };
    const Component = Tag;
    return /* @__PURE__ */ jsx(Component, { ref, "data-direction": direction, style: composed, ...props });
  }
);
Stack.displayName = "Stack";
var Flex = Stack;

export {
  Stack,
  Flex
};
