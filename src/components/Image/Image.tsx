import React from 'react'

export type ImageFormat = 'webp' | 'avif' | 'jpg' | 'jpeg' | 'png' | (string & {})

export interface ImageUrlParams {
  width: number
  height: number
  quality?: number
  format?: ImageFormat
}

export type ImageUrlBuilder = (src: string, params: ImageUrlParams) => string

const URL_PLACEHOLDER_BASE = 'http://_react_primitives_placeholder_.invalid'

export const buildImageUrl: ImageUrlBuilder = (src, { width, height, quality, format }) => {
  const trimmed = src?.trim()
  if (!trimmed) {
    return ''
  }

  const isAbsolute = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
  let url: URL
  try {
    url = new URL(trimmed, isAbsolute ? undefined : URL_PLACEHOLDER_BASE)
  } catch {
    return trimmed
  }

  url.searchParams.set('width', String(Math.round(width)))
  url.searchParams.set('height', String(Math.round(height)))
  if (format) {
    url.searchParams.set('format', format)
  }
  if (quality != null) {
    url.searchParams.set('quality', String(quality))
  }

  return isAbsolute ? url.toString() : `${url.pathname}${url.search}${url.hash}`
}

export const DEFAULT_DENSITIES = [1, 2, 3] as const

export const buildSrcSet = (
  src: string,
  width: number,
  height: number,
  densities: readonly number[],
  quality: number | undefined,
  format: ImageFormat | undefined,
  buildUrl: ImageUrlBuilder
): string =>
  Array.from(new Set(densities))
    .filter((d) => d > 0 && Number.isFinite(d))
    .sort((a, b) => a - b)
    .map((d) => `${buildUrl(src, { width: width * d, height: height * d, quality, format })} ${d}x`)
    .join(', ')

export interface ImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  src: string
  alt: string
  width: number
  height: number
  quality?: number
  format?: ImageFormat
  /** DPR descriptors. Defaults to `[1, 2, 3]`. */
  densities?: readonly number[]
  /** Sets `loading="eager"` and `fetchpriority="high"` (for above-the-fold images). */
  eager?: boolean
  /** Override URL builder. Default appends `width`/`height`/`format`/`quality` query params. */
  buildUrl?: ImageUrlBuilder
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      quality,
      format = 'webp',
      densities = DEFAULT_DENSITIES,
      eager,
      buildUrl = buildImageUrl,
      loading,
      decoding = 'async',
      fetchPriority,
      ...rest
    },
    ref
  ) => {
    const sortedDensities = Array.from(new Set(densities))
      .filter((d) => d > 0 && Number.isFinite(d))
      .sort((a, b) => a - b)
    const baseDensity = sortedDensities[0] ?? 1

    const baseSrc = buildUrl(src, {
      width: width * baseDensity,
      height: height * baseDensity,
      quality,
      format,
    })

    const srcSet =
      sortedDensities.length > 1
        ? buildSrcSet(src, width, height, sortedDensities, quality, format, buildUrl)
        : undefined

    return (
      <img
        ref={ref}
        src={baseSrc}
        srcSet={srcSet}
        alt={alt}
        width={width}
        height={height}
        loading={loading ?? (eager ? 'eager' : 'lazy')}
        fetchPriority={fetchPriority ?? (eager ? 'high' : undefined)}
        decoding={decoding}
        {...rest}
      />
    )
  }
)
Image.displayName = 'Image'
