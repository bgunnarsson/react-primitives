"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }// src/components/Embed/Embed.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var YOUTUBE_RE = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|v\/)|youtu\.be\/)([\w-]{11})/;
var VIMEO_RE = /vimeo\.com\/(?:video\/)?(\d+)/;
var getYouTubeEmbedUrl = (urlOrId) => {
  if (/^[\w-]{11}$/.test(urlOrId)) {
    return `https://www.youtube.com/embed/${urlOrId}`;
  }
  const match = urlOrId.match(YOUTUBE_RE);
  return match ? `https://www.youtube.com/embed/${match[1]}` : urlOrId;
};
var getVimeoEmbedUrl = (urlOrId) => {
  if (/^\d+$/.test(urlOrId)) {
    return `https://player.vimeo.com/video/${urlOrId}`;
  }
  const match = urlOrId.match(VIMEO_RE);
  return match ? `https://player.vimeo.com/video/${match[1]}` : urlOrId;
};
var DEFAULT_ALLOW = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
var Embed = _react2.default.forwardRef(
  ({
    src,
    title,
    allow,
    allowFullScreen,
    loading = "lazy",
    referrerPolicy = "strict-origin-when-cross-origin",
    className,
    ...rest
  }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
    "iframe",
    {
      ref,
      src,
      title,
      allow: _nullishCoalesce(allow, () => ( DEFAULT_ALLOW)),
      allowFullScreen: _nullishCoalesce(allowFullScreen, () => ( true)),
      loading,
      referrerPolicy,
      className,
      ...rest
    }
  )
);
Embed.displayName = "Embed";





exports.getYouTubeEmbedUrl = getYouTubeEmbedUrl; exports.getVimeoEmbedUrl = getVimeoEmbedUrl; exports.Embed = Embed;
