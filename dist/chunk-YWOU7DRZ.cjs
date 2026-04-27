"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/FocusScope/FocusScope.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  'input:not([disabled]):not([type="hidden"])',
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
  "audio[controls]",
  "video[controls]",
  "details > summary"
].join(",");
function isVisible(el) {
  return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
}
function getFocusable(root) {
  const nodes = Array.from(root.querySelectorAll(FOCUSABLE_SELECTOR));
  return nodes.filter((n) => !n.hasAttribute("disabled") && isVisible(n));
}
var FocusScope = _react2.default.forwardRef(
  ({ trapped = true, autoFocus = true, restoreFocus = true, loop = true, onKeyDown, children, ...rest }, ref) => {
    const containerRef = _react2.default.useRef(null);
    const previouslyFocused = _react2.default.useRef(null);
    _react2.default.useImperativeHandle(ref, () => containerRef.current, []);
    _react2.default.useEffect(() => {
      if (typeof document === "undefined") return;
      previouslyFocused.current = document.activeElement;
      const node = containerRef.current;
      if (!node) return;
      if (autoFocus) {
        const focusables = getFocusable(node);
        const target = _nullishCoalesce(focusables[0], () => ( node));
        if (target === node && !node.hasAttribute("tabindex")) {
          node.setAttribute("tabindex", "-1");
        }
        target.focus({ preventScroll: true });
      }
      return () => {
        if (restoreFocus) {
          const prev = previouslyFocused.current;
          if (prev && document.contains(prev)) {
            prev.focus({ preventScroll: true });
          }
        }
      };
    }, [autoFocus, restoreFocus]);
    const handleKeyDown = (e) => {
      _optionalChain([onKeyDown, 'optionalCall', _ => _(e)]);
      if (e.defaultPrevented) return;
      if (!trapped || e.key !== "Tab") return;
      const node = containerRef.current;
      if (!node) return;
      const focusables = getFocusable(node);
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === first || !node.contains(active)) {
          e.preventDefault();
          if (loop) last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          if (loop) first.focus();
        }
      }
    };
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref: containerRef, onKeyDown: handleKeyDown, ...rest, children });
  }
);
FocusScope.displayName = "FocusScope";



exports.FocusScope = FocusScope;
