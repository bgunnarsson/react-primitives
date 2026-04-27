"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/components/Mark/Mark.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var Mark = _react2.default.forwardRef(
  ({ text, query, caseSensitive = false, highlight, children, ...rest }, ref) => {
    if (text !== void 0 && query) {
      const queries = Array.isArray(query) ? query : [query];
      const cleaned = queries.map((q) => q.trim()).filter(Boolean);
      if (cleaned.length === 0) {
        return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { ref, ...rest, children: text });
      }
      const pattern = new RegExp(`(${cleaned.map(escapeRegExp).join("|")})`, caseSensitive ? "g" : "gi");
      const parts = text.split(pattern);
      return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "span", { ref, ...rest, children: parts.map((part, i) => {
        const isMatch = pattern.test(part);
        pattern.lastIndex = 0;
        if (isMatch) {
          if (highlight) return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _react2.default.Fragment, { children: highlight(part, i) }, i);
          return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "mark", { children: part }, i);
        }
        return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _react2.default.Fragment, { children: part }, i);
      }) });
    }
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "mark", { ref, ...rest, children });
  }
);
Mark.displayName = "Mark";



exports.Mark = Mark;
