"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Tabs/Tabs.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reacttabs = require('@radix-ui/react-tabs'); var RadixTabs = _interopRequireWildcard(_reacttabs);
var _jsxruntime = require('react/jsx-runtime');
var Tabs = RadixTabs.Root;
var TabsList = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTabs.List, { ref, className, ...props })
);
TabsList.displayName = "TabsList";
var TabsTrigger = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTabs.Trigger, { ref, className, ...props })
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixTabs.Content, { ref, className, ...props })
);
TabsContent.displayName = "TabsContent";






exports.Tabs = Tabs; exports.TabsList = TabsList; exports.TabsTrigger = TabsTrigger; exports.TabsContent = TabsContent;
//# sourceMappingURL=chunk-GXAT7HOX.cjs.map