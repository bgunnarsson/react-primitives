// src/components/CodeBlock/CodeBlock.tsx
import { useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var CodeBlock = ({ code, title, children, ...props }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2e3)
    })
  }
  return /* @__PURE__ */ jsxs('div', {
    ...props,
    children: [
      /* @__PURE__ */ jsxs('div', {
        'data-slot': 'header',
        children: [
          title && /* @__PURE__ */ jsx('span', { 'data-slot': 'title', children: title }),
          /* @__PURE__ */ jsx('button', {
            'data-slot': 'copy',
            'data-copied': copied,
            onClick: handleCopy,
            type: 'button',
            'aria-label': 'Copy code',
            children: copied
              ? /* @__PURE__ */ jsx('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  'aria-hidden': 'true',
                  children: /* @__PURE__ */ jsx('polyline', { points: '20 6 9 17 4 12' }),
                })
              : /* @__PURE__ */ jsxs('svg', {
                  xmlns: 'http://www.w3.org/2000/svg',
                  width: '16',
                  height: '16',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  'aria-hidden': 'true',
                  children: [
                    /* @__PURE__ */ jsx('rect', { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' }),
                    /* @__PURE__ */ jsx('path', { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' }),
                  ],
                }),
          }),
        ],
      }),
      /* @__PURE__ */ jsx('pre', {
        'data-slot': 'pre',
        children: /* @__PURE__ */ jsx('code', { 'data-slot': 'code', children: children ?? code }),
      }),
    ],
  })
}

export { CodeBlock }
