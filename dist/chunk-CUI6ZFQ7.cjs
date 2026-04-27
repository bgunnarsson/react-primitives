"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Timeline/Timeline.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var TimelineContext = _react2.default.createContext({ orientation: "vertical" });
var TimelineItemContext = _react2.default.createContext({ state: "default" });
var Timeline = _react2.default.forwardRef(
  ({ orientation = "vertical", ...props }, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TimelineContext.Provider, { value: { orientation }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "ol", { ref, "data-orientation": orientation, ...props }) })
);
Timeline.displayName = "Timeline";
var TimelineItem = _react2.default.forwardRef(
  ({ state = "default", ...props }, ref) => {
    const { orientation } = _react2.default.useContext(TimelineContext);
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, TimelineItemContext.Provider, { value: { state }, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "li", { ref, "data-state": state, "data-orientation": orientation, ...props }) });
  }
);
TimelineItem.displayName = "TimelineItem";
var TimelineIndicator = _react2.default.forwardRef((props, ref) => {
  const { state } = _react2.default.useContext(TimelineItemContext);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { ref, "data-state": state, "aria-hidden": "true", ...props });
});
TimelineIndicator.displayName = "TimelineIndicator";
var TimelineConnector = _react2.default.forwardRef((props, ref) => {
  const { orientation } = _react2.default.useContext(TimelineContext);
  const { state } = _react2.default.useContext(TimelineItemContext);
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { ref, "data-state": state, "data-orientation": orientation, "aria-hidden": "true", ...props });
});
TimelineConnector.displayName = "TimelineConnector";
var TimelineContent = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, ...props }));
TimelineContent.displayName = "TimelineContent";
var TimelineTitle = _react2.default.forwardRef(
  ({ as: Tag = "p", ...props }, ref) => {
    const Component = Tag;
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, Component, { ref, ...props });
  }
);
TimelineTitle.displayName = "TimelineTitle";
var TimelineDescription = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "p", { ref, ...props }));
TimelineDescription.displayName = "TimelineDescription";
var TimelineTime = _react2.default.forwardRef((props, ref) => /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "time", { ref, ...props }));
TimelineTime.displayName = "TimelineTime";










exports.Timeline = Timeline; exports.TimelineItem = TimelineItem; exports.TimelineIndicator = TimelineIndicator; exports.TimelineConnector = TimelineConnector; exports.TimelineContent = TimelineContent; exports.TimelineTitle = TimelineTitle; exports.TimelineDescription = TimelineDescription; exports.TimelineTime = TimelineTime;
