"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Icon/Icon.tsx
var _jsxruntime = require('react/jsx-runtime');
var Icon = ({
  name,
  mode = "sprite",
  spriteHref = "/icons.svg",
  size = 24,
  className,
  ...props
}) => {
  if (mode === "external") {
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "img",
      {
        src: `/icons/${name}.svg`,
        "aria-hidden": "true",
        width: size,
        height: size,
        className
      }
    );
  }
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "svg",
    {
      width: size,
      height: size,
      "aria-hidden": "true",
      className,
      ...props,
      children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "use", { href: `${spriteHref}#${name}` })
    }
  );
};



exports.Icon = Icon;
