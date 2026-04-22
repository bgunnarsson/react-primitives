"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Dialog/Dialog.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactdialog = require('@radix-ui/react-dialog'); var RadixDialog = _interopRequireWildcard(_reactdialog);
var _jsxruntime = require('react/jsx-runtime');
var Dialog = RadixDialog.Root;
var DialogTrigger = RadixDialog.Trigger;
var DialogPortal = RadixDialog.Portal;
var DialogClose = RadixDialog.Close;
var DialogTitle = RadixDialog.Title;
var DialogDescription = RadixDialog.Description;
var DialogOverlay = _react2.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDialog.Overlay, { ref, className, ...props }));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = _react2.default.forwardRef(({ className, overlayClassName, overlayStyle, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, DialogPortal, { children: [
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, DialogOverlay, { className: overlayClassName, style: overlayStyle }),
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDialog.Content, { ref, className, ...props, children })
] }));
DialogContent.displayName = "DialogContent";










exports.Dialog = Dialog; exports.DialogTrigger = DialogTrigger; exports.DialogPortal = DialogPortal; exports.DialogClose = DialogClose; exports.DialogTitle = DialogTitle; exports.DialogDescription = DialogDescription; exports.DialogOverlay = DialogOverlay; exports.DialogContent = DialogContent;
