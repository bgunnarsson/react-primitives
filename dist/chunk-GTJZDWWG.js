// src/components/Mark/Mark.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var Mark = React.forwardRef(
  ({ text, query, caseSensitive = false, highlight, children, ...rest }, ref) => {
    if (text !== void 0 && query) {
      const queries = Array.isArray(query) ? query : [query];
      const cleaned = queries.map((q) => q.trim()).filter(Boolean);
      if (cleaned.length === 0) {
        return /* @__PURE__ */ jsx("span", { ref, ...rest, children: text });
      }
      const pattern = new RegExp(`(${cleaned.map(escapeRegExp).join("|")})`, caseSensitive ? "g" : "gi");
      const parts = text.split(pattern);
      return /* @__PURE__ */ jsx("span", { ref, ...rest, children: parts.map((part, i) => {
        const isMatch = pattern.test(part);
        pattern.lastIndex = 0;
        if (isMatch) {
          if (highlight) return /* @__PURE__ */ jsx(React.Fragment, { children: highlight(part, i) }, i);
          return /* @__PURE__ */ jsx("mark", { children: part }, i);
        }
        return /* @__PURE__ */ jsx(React.Fragment, { children: part }, i);
      }) });
    }
    return /* @__PURE__ */ jsx("mark", { ref, ...rest, children });
  }
);
Mark.displayName = "Mark";

export {
  Mark
};
