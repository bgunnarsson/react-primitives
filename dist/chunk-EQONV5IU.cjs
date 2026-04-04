"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/ToggleGroup/ToggleGroup.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reacttogglegroup = require('@radix-ui/react-toggle-group'); var RadixToggleGroup = _interopRequireWildcard(_reacttogglegroup);
var _jsxruntime = require('react/jsx-runtime');
var ToggleGroup = _react2.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixToggleGroup.Root, { ref, className, ...props }));
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = _react2.default.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixToggleGroup.Item, { ref, className, ...props }));
ToggleGroupItem.displayName = "ToggleGroupItem";




exports.ToggleGroup = ToggleGroup; exports.ToggleGroupItem = ToggleGroupItem;
//# sourceMappingURL=chunk-EQONV5IU.cjs.map