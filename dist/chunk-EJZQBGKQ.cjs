"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/components/Alert/Alert.tsx
var _jsxruntime = require('react/jsx-runtime');
var Alert = ({ as: headingLevel, heading, description, children, ...props }) => /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, "div", { role: "alert", ...props, children: [
  heading && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AlertTitle, { as: headingLevel, children: heading }),
  description && /* @__PURE__ */ _jsxruntime.jsx.call(void 0, AlertDescription, { children: description }),
  children
] });
var AlertTitle = ({ as: Tag = "h5", ...props }) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Tag, { "data-part": "title", ...props });
var AlertDescription = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { "data-part": "description", ...props });
var AlertIcon = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { "aria-hidden": "true", "data-part": "icon", ...props });
var AlertActions = (props) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { "data-part": "actions", ...props });







exports.Alert = Alert; exports.AlertTitle = AlertTitle; exports.AlertDescription = AlertDescription; exports.AlertIcon = AlertIcon; exports.AlertActions = AlertActions;
