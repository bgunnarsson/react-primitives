"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Accordion/Accordion.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactaccordion = require('@radix-ui/react-accordion'); var RadixAccordion = _interopRequireWildcard(_reactaccordion);
var _jsxruntime = require('react/jsx-runtime');
var Accordion = RadixAccordion.Root;
var AccordionItem = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAccordion.Item, { ref, ...props })
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = _react2.default.forwardRef(
  ({ children, ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAccordion.Header, { children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAccordion.Trigger, { ref, ...props, children }) })
);
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = _react2.default.forwardRef(
  (props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, RadixAccordion.Content, { ref, ...props })
);
AccordionContent.displayName = "AccordionContent";






exports.Accordion = Accordion; exports.AccordionItem = AccordionItem; exports.AccordionTrigger = AccordionTrigger; exports.AccordionContent = AccordionContent;
//# sourceMappingURL=chunk-5WXGQJJ7.cjs.map