"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/DropdownMenu/DropdownMenu.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactdropdownmenu = require('@radix-ui/react-dropdown-menu'); var RadixDropdownMenu = _interopRequireWildcard(_reactdropdownmenu);
var _jsxruntime = require('react/jsx-runtime');
var DropdownMenu = RadixDropdownMenu.Root;
var DropdownMenuTrigger = RadixDropdownMenu.Trigger;
var DropdownMenuGroup = RadixDropdownMenu.Group;
var DropdownMenuSub = RadixDropdownMenu.Sub;
var DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup;
var DropdownMenuContent = _react2.default.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.Content, { ref, sideOffset, className, ...props }) })
);
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.Item, { ref, className, ...props })
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixDropdownMenu.CheckboxItem, { ref, className, ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, RadixDropdownMenu.RadioItem, { ref, className, ...props, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.Label, { ref, className, ...props })
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.Separator, { ref, className, ...props })
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuSubTrigger = _react2.default.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.SubTrigger, { ref, className, ...props, children })
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixDropdownMenu.SubContent, { ref, className, ...props })
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";















exports.DropdownMenu = DropdownMenu; exports.DropdownMenuTrigger = DropdownMenuTrigger; exports.DropdownMenuGroup = DropdownMenuGroup; exports.DropdownMenuSub = DropdownMenuSub; exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup; exports.DropdownMenuContent = DropdownMenuContent; exports.DropdownMenuItem = DropdownMenuItem; exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem; exports.DropdownMenuRadioItem = DropdownMenuRadioItem; exports.DropdownMenuLabel = DropdownMenuLabel; exports.DropdownMenuSeparator = DropdownMenuSeparator; exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger; exports.DropdownMenuSubContent = DropdownMenuSubContent;
