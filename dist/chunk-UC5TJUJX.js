// src/components/Icon/Icon.tsx
import { jsx } from 'react/jsx-runtime'
var Icon = ({ name, mode = 'sprite', spriteHref = '/icons.svg', size = 24, className, ...props }) => {
  if (mode === 'external') {
    return /* @__PURE__ */ jsx('img', {
      src: `/icons/${name}.svg`,
      'aria-hidden': 'true',
      width: size,
      height: size,
      className,
    })
  }
  return /* @__PURE__ */ jsx('svg', {
    width: size,
    height: size,
    'aria-hidden': 'true',
    className,
    ...props,
    children: /* @__PURE__ */ jsx('use', { href: `${spriteHref}#${name}` }),
  })
}

export { Icon }
