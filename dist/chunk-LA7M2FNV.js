import { DEFAULT_DENSITIES, buildImageUrl, buildSrcSet } from './chunk-S6WYCWSY.js'

// src/components/CropImage/CropImage.tsx
import React from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
var cx = (...parts) => parts.filter(Boolean).join(' ') || void 0
var CropImage = React.forwardRef(
  (
    {
      identifier,
      modifier,
      alt,
      mobile,
      desktop,
      breakpoint = 420,
      quality,
      format = 'webp',
      densities = DEFAULT_DENSITIES,
      eager,
      imgClassName,
      imgProps,
      buildUrl = buildImageUrl,
      className,
      ...rest
    },
    ref
  ) => {
    const sortedDensities = Array.from(new Set(densities))
      .filter((d) => d > 0 && Number.isFinite(d))
      .sort((a, b) => a - b)
    const baseDensity = sortedDensities[0] ?? 1
    const buildBase = (crop) =>
      buildUrl(crop.src, {
        width: crop.width * baseDensity,
        height: crop.height * baseDensity,
        quality,
        format,
      })
    const mobileSrcSet = buildSrcSet(
      mobile.src,
      mobile.width,
      mobile.height,
      sortedDensities,
      quality,
      format,
      buildUrl
    )
    const desktopSrcSet = desktop
      ? buildSrcSet(desktop.src, desktop.width, desktop.height, sortedDensities, quality, format, buildUrl)
      : null
    const fallbackCrop = desktop ?? mobile
    const fallbackBase = buildBase(fallbackCrop)
    const fallbackSrcSet = desktopSrcSet ?? mobileSrcSet
    return /* @__PURE__ */ jsxs('picture', {
      ref,
      className: cx(`${identifier}__picture`, modifier, className),
      ...rest,
      children: [
        /* @__PURE__ */ jsx('source', {
          media: `(max-width: ${breakpoint}px)`,
          srcSet: mobileSrcSet,
          width: mobile.width,
          height: mobile.height,
        }),
        desktop && desktopSrcSet
          ? /* @__PURE__ */ jsx('source', {
              media: `(min-width: ${breakpoint + 1}px)`,
              srcSet: desktopSrcSet,
              width: desktop.width,
              height: desktop.height,
            })
          : null,
        /* @__PURE__ */ jsx('img', {
          className: cx(`${identifier}__image`, imgClassName),
          src: fallbackBase,
          srcSet: fallbackSrcSet,
          width: fallbackCrop.width,
          height: fallbackCrop.height,
          alt,
          loading: eager ? 'eager' : 'lazy',
          fetchPriority: eager ? 'high' : void 0,
          decoding: 'async',
          ...imgProps,
        }),
      ],
    })
  }
)
CropImage.displayName = 'CropImage'

export { CropImage }
