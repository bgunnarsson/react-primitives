"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Collapsible/Collapsible.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactcollapsible = require('@radix-ui/react-collapsible'); var RadixCollapsible = _interopRequireWildcard(_reactcollapsible);
var _jsxruntime = require('react/jsx-runtime');
var Collapsible = RadixCollapsible.Root;
var CollapsibleTrigger = RadixCollapsible.Trigger;
var CollapsibleContent = _react2.default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixCollapsible.Content, { ref, className, ...props })
);
CollapsibleContent.displayName = "CollapsibleContent";





exports.Collapsible = Collapsible; exports.CollapsibleTrigger = CollapsibleTrigger; exports.CollapsibleContent = CollapsibleContent;
//# sourceMappingURL=chunk-6NQZDSRG.cjs.map