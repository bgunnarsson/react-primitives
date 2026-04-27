"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/Banner/Banner.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var BannerContext = _react2.default.createContext(null);
var useBanner = () => {
  const ctx = _react2.default.useContext(BannerContext);
  if (!ctx) throw new Error("Banner subcomponents must be used inside <Banner>");
  return ctx;
};
var Banner = _react2.default.forwardRef(
  ({ open: openProp, defaultOpen = true, onOpenChange, variant, role = "status", children, ...rest }, ref) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(defaultOpen);
    const controlled = openProp !== void 0;
    const open = controlled ? !!openProp : uncontrolled;
    const dismiss = _react2.default.useCallback(() => {
      if (!controlled) setUncontrolled(false);
      _optionalChain([onOpenChange, 'optionalCall', _ => _(false)]);
    }, [controlled, onOpenChange]);
    if (!open) return null;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, BannerContext.Provider, { value: { dismiss }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
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
var BannerIcon = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { ref, "aria-hidden": "true", "data-part": "icon", ...props }));
BannerIcon.displayName = "BannerIcon";
var BannerTitle = _react2.default.forwardRef(({ as: Tag = "p", ...props }, ref) => {
  const Component = Tag;
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Component, { ref, "data-part": "title", ...props });
});
BannerTitle.displayName = "BannerTitle";
var BannerDescription = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { ref, "data-part": "description", ...props }));
BannerDescription.displayName = "BannerDescription";
var BannerActions = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, "data-part": "actions", ...props }));
BannerActions.displayName = "BannerActions";
var BannerClose = _react2.default.forwardRef(
  ({ onClick, children, "aria-label": ariaLabel = "Dismiss", ...rest }, ref) => {
    const { dismiss } = useBanner();
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "button",
      {
        ref,
        type: "button",
        "aria-label": ariaLabel,
        "data-part": "close",
        onClick: (e) => {
          _optionalChain([onClick, 'optionalCall', _2 => _2(e)]);
          if (!e.defaultPrevented) dismiss();
        },
        ...rest,
        children: _nullishCoalesce(children, () => ( "\xD7"))
      }
    );
  }
);
BannerClose.displayName = "BannerClose";








exports.Banner = Banner; exports.BannerIcon = BannerIcon; exports.BannerTitle = BannerTitle; exports.BannerDescription = BannerDescription; exports.BannerActions = BannerActions; exports.BannerClose = BannerClose;
