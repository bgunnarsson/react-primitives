'use strict'
Object.defineProperty(exports, '__esModule', { value: true }) // src/components/Richtext/Richtext.tsx
var _jsxruntime = require('react/jsx-runtime')
var Richtext = ({ html, className, ...props }) =>
  // eslint-disable-next-line react/no-danger
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', {
    dangerouslySetInnerHTML: { __html: html },
    className,
    ...props,
  })

exports.Richtext = Richtext
