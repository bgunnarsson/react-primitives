"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }



var _chunkK644RAKAcjs = require('./chunk-K644RAKA.cjs');

// src/components/Combobox/Combobox.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _cmdk = require('cmdk');
var _jsxruntime = require('react/jsx-runtime');
var Combobox = ({ open, onOpenChange, children }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkK644RAKAcjs.Popover, { open, onOpenChange, children });
var ComboboxTrigger = _chunkK644RAKAcjs.PopoverTrigger;
var ComboboxContent = _react2.default.forwardRef(
  ({ align = "start", ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkK644RAKAcjs.PopoverContent, { ref, align, ...props })
);
ComboboxContent.displayName = "ComboboxContent";
var ComboboxInput = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _cmdk.Command.Input, { ref, ...props })
);
ComboboxInput.displayName = "ComboboxInput";
var ComboboxList = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _cmdk.Command.List, { ref, ...props })
);
ComboboxList.displayName = "ComboboxList";
var ComboboxItem = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _cmdk.Command.Item, { ref, ...props })
);
ComboboxItem.displayName = "ComboboxItem";
var ComboboxEmpty = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _cmdk.Command.Empty, { ...props });










exports.Cmdk = _cmdk.Command; exports.Combobox = Combobox; exports.ComboboxTrigger = ComboboxTrigger; exports.ComboboxContent = ComboboxContent; exports.ComboboxInput = ComboboxInput; exports.ComboboxList = ComboboxList; exports.ComboboxItem = ComboboxItem; exports.ComboboxEmpty = ComboboxEmpty;
//# sourceMappingURL=chunk-Z5GTS4RV.cjs.map