import React from 'react'

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Icon name — maps to `#name` in sprite or `/icons/name.svg` in external mode */
  name: string
  /** Render mode: sprite uses `<use href>`, external uses `<img src>` */
  mode?: 'sprite' | 'external'
  /** Href of the SVG sprite file (sprite mode only) */
  spriteHref?: string
  size?: number
}

export const Icon = ({
  name,
  mode = 'sprite',
  spriteHref = '/icons.svg',
  size = 24,
  className,
  ...props
}: IconProps) => {
  if (mode === 'external') {
    return (
      <img
        src={`/icons/${name}.svg`}
        aria-hidden="true"
        width={size}
        height={size}
        className={className}
      />
    )
  }

  return (
    <svg
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      {...props}
    >
      <use href={`${spriteHref}#${name}`} />
    </svg>
  )
}
