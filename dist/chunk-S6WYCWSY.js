// src/components/Image/Image.tsx
import React from 'react'
import { jsx } from 'react/jsx-runtime'
var URL_PLACEHOLDER_BASE = 'http://_react_primitives_placeholder_.invalid'
var buildImageUrl = (src, { width, height, quality, format }) => {
  const trimmed = src?.trim()
  if (!trimmed) return ''
  const isAbsolute = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed)
  let url
  try {
    url = new URL(trimmed, isAbsolute ? void 0 : URL_PLACEHOLDER_BASE)
  } catch {
    return trimmed
  }
  url.searchParams.set('width', String(Math.round(width)))
  url.searchParams.set('height', String(Math.round(height)))
  if (format) url.searchParams.set('format', format)
  if (quality != null) url.searchParams.set('quality', String(quality))
  return isAbsolute ? url.toString() : `${url.pathname}${url.search}${url.hash}`
}
var DEFAULT_DENSITIES = [1, 2, 3]
var buildSrcSet = (src, width, height, densities, quality, format, buildUrl) =>
  Array.from(new Set(densities))
    .filter((d) => d > 0 && Number.isFinite(d))
    .sort((a, b) => a - b)
    .map((d) => `${buildUrl(src, { width: width * d, height: height * d, quality, format })} ${d}x`)
    .join(', ')
var Image = React.forwardRef(
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
      sortedDensities.length > 1 ? buildSrcSet(src, width, height, sortedDensities, quality, format, buildUrl) : void 0
    return /* @__PURE__ */ jsx('img', {
      ref,
      src: baseSrc,
      srcSet,
      alt,
      width,
      height,
      loading: loading ?? (eager ? 'eager' : 'lazy'),
      fetchPriority: fetchPriority ?? (eager ? 'high' : void 0),
      decoding,
      ...rest,
    })
  }
)
Image.displayName = 'Image'

export { buildImageUrl, DEFAULT_DENSITIES, buildSrcSet, Image }
