// src/components/VideoPlayer/VideoPlayer.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var VideoPlayer = React.forwardRef(
  ({ src, poster, className, ...props }, ref) => /* @__PURE__ */ jsx("video", { ref, src, poster, className, ...props })
);
VideoPlayer.displayName = "VideoPlayer";

export {
  VideoPlayer
};
//# sourceMappingURL=chunk-XFFK3FK7.js.map