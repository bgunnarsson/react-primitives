import React from 'react'

export interface PictureSource {
  srcSet: string
  media?: string
  type?: string
}

export interface PictureProps extends React.HTMLAttributes<HTMLPictureElement> {
  src: string
  alt: string
  sources?: PictureSource[]
  loading?: 'lazy' | 'eager'
  width?: number
  height?: number
  /** className forwarded to the inner `<img>` element */
  imgClassName?: string
}

export const Picture = ({
  src,
  alt,
  sources = [],
  loading = 'lazy',
  width,
  height,
  imgClassName,
  className,
  ...props
}: PictureProps) => (
  <picture className={className} {...props}>
    {sources.map((source, i) => (
      <source key={i} {...source} />
    ))}
    <img src={src} alt={alt} loading={loading} width={width} height={height} className={imgClassName} />
  </picture>
)
