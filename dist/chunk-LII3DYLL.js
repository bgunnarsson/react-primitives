// src/components/Avatar/Avatar.tsx
import React from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { jsx } from "react/jsx-runtime";
var Avatar = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(RadixAvatar.Root, { ref, ...props })
);
Avatar.displayName = "Avatar";
var AvatarImage = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(RadixAvatar.Image, { ref, ...props })
);
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(RadixAvatar.Fallback, { ref, ...props })
);
AvatarFallback.displayName = "AvatarFallback";

export {
  Avatar,
  AvatarImage,
  AvatarFallback
};
