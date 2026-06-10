// src/components/Embed/Embed.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
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
var Embed = React.forwardRef(
  ({
    src,
    title,
    allow,
    allowFullScreen,
    loading = "lazy",
    referrerPolicy = "strict-origin-when-cross-origin",
    className,
    ...rest
  }, ref) => /* @__PURE__ */ jsx(
    "iframe",
    {
      ref,
      src,
      title,
      allow: allow ?? DEFAULT_ALLOW,
      allowFullScreen: allowFullScreen ?? true,
      loading,
      referrerPolicy,
      className,
      ...rest
    }
  )
);
Embed.displayName = "Embed";

export {
  getYouTubeEmbedUrl,
  getVimeoEmbedUrl,
  Embed
};
