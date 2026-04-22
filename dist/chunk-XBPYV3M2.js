// src/components/Picture/Picture.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Picture = ({
  src,
  alt,
  sources = [],
  loading = "lazy",
  width,
  height,
  imgClassName,
  className,
  ...props
}) => /* @__PURE__ */ jsxs("picture", { className, ...props, children: [
  sources.map((source, i) => /* @__PURE__ */ jsx("source", { ...source }, i)),
  /* @__PURE__ */ jsx(
    "img",
    {
      src,
      alt,
      loading,
      width,
      height,
      className: imgClassName
    }
  )
] });

export {
  Picture
};
