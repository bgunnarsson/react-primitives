// src/components/Banner/Banner.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var BannerContext = React.createContext(null);
var useBanner = () => {
  const ctx = React.useContext(BannerContext);
  if (!ctx) throw new Error("Banner subcomponents must be used inside <Banner>");
  return ctx;
};
var Banner = React.forwardRef(
  ({ open: openProp, defaultOpen = true, onOpenChange, variant, role = "status", children, ...rest }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultOpen);
    const controlled = openProp !== void 0;
    const open = controlled ? !!openProp : uncontrolled;
    const dismiss = React.useCallback(() => {
      if (!controlled) setUncontrolled(false);
      onOpenChange?.(false);
    }, [controlled, onOpenChange]);
    if (!open) return null;
    return /* @__PURE__ */ jsx(BannerContext.Provider, { value: { dismiss }, children: /* @__PURE__ */ jsx(
      "section",
      {
        ref,
        role,
        "data-variant": variant,
        ...rest,
        children
      }
    ) });
  }
);
Banner.displayName = "Banner";
var BannerIcon = React.forwardRef((props, ref) => /* @__PURE__ */ jsx("span", { ref, "aria-hidden": "true", "data-part": "icon", ...props }));
BannerIcon.displayName = "BannerIcon";
var BannerTitle = React.forwardRef(({ as: Tag = "p", ...props }, ref) => {
  const Component = Tag;
  return /* @__PURE__ */ jsx(Component, { ref, "data-part": "title", ...props });
});
BannerTitle.displayName = "BannerTitle";
var BannerDescription = React.forwardRef((props, ref) => /* @__PURE__ */ jsx("p", { ref, "data-part": "description", ...props }));
BannerDescription.displayName = "BannerDescription";
var BannerActions = React.forwardRef((props, ref) => /* @__PURE__ */ jsx("div", { ref, "data-part": "actions", ...props }));
BannerActions.displayName = "BannerActions";
var BannerClose = React.forwardRef(
  ({ onClick, children, "aria-label": ariaLabel = "Dismiss", ...rest }, ref) => {
    const { dismiss } = useBanner();
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        "aria-label": ariaLabel,
        "data-part": "close",
        onClick: (e) => {
          onClick?.(e);
          if (!e.defaultPrevented) dismiss();
        },
        ...rest,
        children: children ?? "\xD7"
      }
    );
  }
);
BannerClose.displayName = "BannerClose";

export {
  Banner,
  BannerIcon,
  BannerTitle,
  BannerDescription,
  BannerActions,
  BannerClose
};
