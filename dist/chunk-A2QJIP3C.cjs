"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Sheet/Sheet.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactdialog = require('@radix-ui/react-dialog'); var RadixDialog = _interopRequireWildcard(_reactdialog);
var _jsxruntime = require('react/jsx-runtime');
var Sheet = RadixDialog.Root;
var SheetTrigger = RadixDialog.Trigger;
var SheetPortal = RadixDialog.Portal;
var SheetClose = RadixDialog.Close;
var SheetTitle = RadixDialog.Title;
var SheetDescription = RadixDialog.Description;
var SheetOverlay = _react2.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDialog.Overlay, { ref, className, ...props }));
SheetOverlay.displayName = "SheetOverlay";
var SheetContent = _react2.default.forwardRef(({ side = "right", className, overlayClassName, overlayStyle, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, SheetPortal, { children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, SheetOverlay, { className: overlayClassName, style: overlayStyle }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDialog.Content, { ref, "data-side": side, className, ...props, children })
] }));
SheetContent.displayName = "SheetContent";










exports.Sheet = Sheet; exports.SheetTrigger = SheetTrigger; exports.SheetPortal = SheetPortal; exports.SheetClose = SheetClose; exports.SheetTitle = SheetTitle; exports.SheetDescription = SheetDescription; exports.SheetOverlay = SheetOverlay; exports.SheetContent = SheetContent;
//# sourceMappingURL=chunk-A2QJIP3C.cjs.map