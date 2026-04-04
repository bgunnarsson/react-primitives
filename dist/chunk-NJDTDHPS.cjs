"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Picture/Picture.tsx
var _jsxruntime = require('react/jsx-runtime');
var Picture = ({
  src,
  alt,
  sources = [],
  loading = "lazy",
  width,
  height,
  imgClassName,
  className,
  ...props
}) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "picture", { className, ...props, children: [
  sources.map((source, i) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "source", { ...source }, i)),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "img",
    {
      src,
      alt,
      loading,
      width,
      height,
      className: imgClassName
    }
  )
] });



exports.Picture = Picture;
//# sourceMappingURL=chunk-NJDTDHPS.cjs.map