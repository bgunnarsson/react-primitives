// src/components/Richtext/Richtext.tsx
import { jsx } from "react/jsx-runtime";
var Richtext = ({ html, className, ...props }) => (
  // eslint-disable-next-line react/no-danger
  /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html }, className, ...props })
);

export {
  Richtext
};
