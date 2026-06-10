"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Richtext/Richtext.tsx
var _jsxruntime = require('react/jsx-runtime');
var Richtext = ({ html, className, ...props }) => (
  // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering pre-sanitized HTML is the explicit purpose of this component; consumers must sanitize before passing
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { dangerouslySetInnerHTML: { __html: html }, className, ...props })
);



exports.Richtext = Richtext;
