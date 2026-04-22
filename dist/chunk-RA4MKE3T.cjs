"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/CodeBlock/CodeBlock.tsx
var _react = require('react');
var _jsxruntime = require('react/jsx-runtime');
var CodeBlock = ({ code, title, children, ...props }) => {
  const [copied, setCopied] = _react.useState.call(void 0, false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { "data-slot": "header", children: [
      title && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "data-slot": "title", children: title }),
      /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "button", { "data-slot": "copy", "data-copied": copied, onClick: handleCopy, type: "button", "aria-label": "Copy code", children: copied ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }),
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
      ] }) })
    ] }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "pre", { "data-slot": "pre", children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "code", { "data-slot": "code", children: _nullishCoalesce(children, () => ( code)) }) })
  ] });
};



exports.CodeBlock = CodeBlock;
