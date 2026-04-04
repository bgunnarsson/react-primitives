"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Popover/Popover.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactpopover = require('@radix-ui/react-popover'); var RadixPopover = _interopRequireWildcard(_reactpopover);
var _jsxruntime = require('react/jsx-runtime');
var Popover = RadixPopover.Root;
var PopoverTrigger = RadixPopover.Trigger;
var PopoverClose = RadixPopover.Close;
var PopoverContent = _react2.default.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixPopover.Portal, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixPopover.Content, { ref, align, sideOffset, className, ...props }) })
);
PopoverContent.displayName = "PopoverContent";






exports.Popover = Popover; exports.PopoverTrigger = PopoverTrigger; exports.PopoverClose = PopoverClose; exports.PopoverContent = PopoverContent;
//# sourceMappingURL=chunk-K644RAKA.cjs.map