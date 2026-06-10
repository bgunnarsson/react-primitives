// src/components/AudioPlayer/AudioPlayer.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var AudioPlayer = React.forwardRef(
  ({ src, className, ...props }, ref) => /* @__PURE__ */ jsx("audio", { ref, src, className, ...props })
);
AudioPlayer.displayName = "AudioPlayer";

export {
  AudioPlayer
};
