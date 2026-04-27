"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/CopyButton/CopyButton.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var writeToClipboard = async (value) => {
  if (typeof navigator !== "undefined" && _optionalChain([navigator, 'access', _ => _.clipboard, 'optionalAccess', _2 => _2.writeText])) {
    await navigator.clipboard.writeText(value);
    return;
  }
  if (typeof document === "undefined") {
    throw new Error("Clipboard API is not available in this environment");
  }
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(ta);
  if (!ok) throw new Error("Failed to copy");
};
var CopyButton = _react2.default.forwardRef(
  ({
    value,
    getValue,
    resetMs = 2e3,
    onCopy,
    onError,
    onClick,
    children,
    type = "button",
    "aria-label": ariaLabel,
    ...rest
  }, ref) => {
    const [copied, setCopied] = _react2.default.useState(false);
    const [error, setError] = _react2.default.useState(null);
    const timer = _react2.default.useRef(null);
    _react2.default.useEffect(
      () => () => {
        if (timer.current) clearTimeout(timer.current);
      },
      []
    );
    const copy = _react2.default.useCallback(async () => {
      try {
        const v = getValue ? await getValue() : _nullishCoalesce(value, () => ( ""));
        await writeToClipboard(v);
        setError(null);
        setCopied(true);
        _optionalChain([onCopy, 'optionalCall', _3 => _3(v)]);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMs);
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        setError(err);
        setCopied(false);
        _optionalChain([onError, 'optionalCall', _4 => _4(err)]);
      }
    }, [value, getValue, resetMs, onCopy, onError]);
    const handleClick = (e) => {
      _optionalChain([onClick, 'optionalCall', _5 => _5(e)]);
      if (e.defaultPrevented) return;
      void copy();
    };
    const renderState = { copied, copy, error };
    const label = _nullishCoalesce(ariaLabel, () => ( (copied ? "Copied" : "Copy to clipboard")));
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "button",
      {
        ref,
        type,
        "data-state": copied ? "copied" : "idle",
        "aria-label": label,
        onClick: handleClick,
        ...rest,
        children: typeof children === "function" ? children(renderState) : _nullishCoalesce(children, () => ( (copied ? "Copied" : "Copy")))
      }
    );
  }
);
CopyButton.displayName = "CopyButton";



exports.CopyButton = CopyButton;
