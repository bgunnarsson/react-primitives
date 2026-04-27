"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/Image/Image.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var URL_PLACEHOLDER_BASE = "http://_react_primitives_placeholder_.invalid";
var buildImageUrl = (src, { width, height, quality, format }) => {
  const trimmed = _optionalChain([src, 'optionalAccess', _ => _.trim, 'call', _2 => _2()]);
  if (!trimmed) return "";
  const isAbsolute = /^[a-z][a-z0-9+.-]*:\/\//i.test(trimmed);
  let url;
  try {
    url = new URL(trimmed, isAbsolute ? void 0 : URL_PLACEHOLDER_BASE);
  } catch (e) {
    return trimmed;
  }
  url.searchParams.set("width", String(Math.round(width)));
  url.searchParams.set("height", String(Math.round(height)));
  if (format) url.searchParams.set("format", format);
  if (quality != null) url.searchParams.set("quality", String(quality));
  return isAbsolute ? url.toString() : `${url.pathname}${url.search}${url.hash}`;
};
var DEFAULT_DENSITIES = [1, 2, 3];
var buildSrcSet = (src, width, height, densities, quality, format, buildUrl) => Array.from(new Set(densities)).filter((d) => d > 0 && Number.isFinite(d)).sort((a, b) => a - b).map(
  (d) => `${buildUrl(src, { width: width * d, height: height * d, quality, format })} ${d}x`
).join(", ");
var Image = _react2.default.forwardRef(
  ({
    src,
    alt,
    width,
    height,
    quality,
    format = "webp",
    densities = DEFAULT_DENSITIES,
    eager,
    buildUrl = buildImageUrl,
    loading,
    decoding = "async",
    fetchPriority,
    ...rest
  }, ref) => {
    const sortedDensities = Array.from(new Set(densities)).filter((d) => d > 0 && Number.isFinite(d)).sort((a, b) => a - b);
    const baseDensity = _nullishCoalesce(sortedDensities[0], () => ( 1));
    const baseSrc = buildUrl(src, {
      width: width * baseDensity,
      height: height * baseDensity,
      quality,
      format
    });
    const srcSet = sortedDensities.length > 1 ? buildSrcSet(src, width, height, sortedDensities, quality, format, buildUrl) : void 0;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "img",
      {
        ref,
        src: baseSrc,
        srcSet,
        alt,
        width,
        height,
        loading: _nullishCoalesce(loading, () => ( (eager ? "eager" : "lazy"))),
        fetchPriority: _nullishCoalesce(fetchPriority, () => ( (eager ? "high" : void 0))),
        decoding,
        ...rest
      }
    );
  }
);
Image.displayName = "Image";






exports.buildImageUrl = buildImageUrl; exports.DEFAULT_DENSITIES = DEFAULT_DENSITIES; exports.buildSrcSet = buildSrcSet; exports.Image = Image;
