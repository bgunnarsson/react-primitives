import * as react_jsx_runtime from 'react/jsx-runtime'
import React__default from 'react'

interface IconProps extends React__default.SVGAttributes<SVGElement> {
  /** Icon name — maps to `#name` in sprite or `/icons/name.svg` in external mode */
  name: string
  /** Render mode: sprite uses `<use href>`, external uses `<img src>` */
  mode?: 'sprite' | 'external'
  /** Href of the SVG sprite file (sprite mode only) */
  spriteHref?: string
  size?: number
}
declare const Icon: ({ name, mode, spriteHref, size, className, ...props }: IconProps) => react_jsx_runtime.JSX.Element

export { Icon, type IconProps }
