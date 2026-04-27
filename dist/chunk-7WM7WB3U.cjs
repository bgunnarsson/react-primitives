'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _nullishCoalesce(lhs, rhsFn) {
  if (lhs != null) {
    return lhs
  } else {
    return rhsFn()
  }
}

var _chunkZKC5U7ITcjs = require('./chunk-ZKC5U7IT.cjs')

// src/components/CropImage/CropImage.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _jsxruntime = require('react/jsx-runtime')
var cx = (...parts) => parts.filter(Boolean).join(' ') || void 0
var CropImage = _react2.default.forwardRef(
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
      densities = _chunkZKC5U7ITcjs.DEFAULT_DENSITIES,
      eager,
      imgClassName,
      imgProps,
      buildUrl = _chunkZKC5U7ITcjs.buildImageUrl,
      className,
      ...rest
    },
    ref
  ) => {
    const sortedDensities = Array.from(new Set(densities))
      .filter((d) => d > 0 && Number.isFinite(d))
      .sort((a, b) => a - b)
    const baseDensity = _nullishCoalesce(sortedDensities[0], () => 1)
    const buildBase = (crop) =>
      buildUrl(crop.src, {
        width: crop.width * baseDensity,
        height: crop.height * baseDensity,
        quality,
        format,
      })
    const mobileSrcSet = _chunkZKC5U7ITcjs.buildSrcSet.call(
      void 0,
      mobile.src,
      mobile.width,
      mobile.height,
      sortedDensities,
      quality,
      format,
      buildUrl
    )
    const desktopSrcSet = desktop
      ? _chunkZKC5U7ITcjs.buildSrcSet.call(
          void 0,
          desktop.src,
          desktop.width,
          desktop.height,
          sortedDensities,
          quality,
          format,
          buildUrl
        )
      : null
    const fallbackCrop = _nullishCoalesce(desktop, () => mobile)
    const fallbackBase = buildBase(fallbackCrop)
    const fallbackSrcSet = _nullishCoalesce(desktopSrcSet, () => mobileSrcSet)
    return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, 'picture', {
      ref,
      className: cx(`${identifier}__picture`, modifier, className),
      ...rest,
      children: [
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'source', {
          media: `(max-width: ${breakpoint}px)`,
          srcSet: mobileSrcSet,
          width: mobile.width,
          height: mobile.height,
        }),
        desktop && desktopSrcSet
          ? /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'source', {
              media: `(min-width: ${breakpoint + 1}px)`,
              srcSet: desktopSrcSet,
              width: desktop.width,
              height: desktop.height,
            })
          : null,
        /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'img', {
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

exports.CropImage = CropImage
