// src/components/Status/Status.tsx
import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var Status = React.forwardRef(
  ({ value, label, showLabel = false, children, ...rest }, ref) => {
    const visualLabel = label ?? (typeof value === "string" ? value : void 0);
    const hasChildren = React.Children.count(children) > 0;
    return /* @__PURE__ */ jsx("span", { ref, role: "status", "data-status": value, "aria-label": !showLabel && !hasChildren ? visualLabel : label, ...rest, children: hasChildren ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(StatusIndicator, {}),
      showLabel && visualLabel ? /* @__PURE__ */ jsx(StatusLabel, { children: visualLabel }) : null
    ] }) });
  }
);
Status.displayName = "Status";
var StatusIndicator = React.forwardRef((props, ref) => /* @__PURE__ */ jsx("span", { ref, "aria-hidden": "true", "data-part": "indicator", ...props }));
StatusIndicator.displayName = "StatusIndicator";
var StatusLabel = React.forwardRef((props, ref) => /* @__PURE__ */ jsx("span", { ref, "data-part": "label", ...props }));
StatusLabel.displayName = "StatusLabel";

export {
  Status,
  StatusIndicator,
  StatusLabel
};
