// src/components/Richtext/Richtext.tsx
import { jsx } from "react/jsx-runtime";
var Richtext = ({ html, className, ...props }) => (
  // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering pre-sanitized HTML is the explicit purpose of this component; consumers must sanitize before passing
  /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: html }, className, ...props })
);

export {
  Richtext
};
