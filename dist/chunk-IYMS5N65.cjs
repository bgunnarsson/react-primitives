"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/MaskedInput/MaskedInput.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var PLACEHOLDERS = {
  "9": /[0-9]/,
  a: /[A-Za-z]/,
  "*": /[A-Za-z0-9]/
};
var isPlaceholder = (ch) => ch in PLACEHOLDERS;
var applyMask = (raw, mask, maskChar) => {
  let masked = "";
  let rawIndex = 0;
  let lastFilled = -1;
  for (let i = 0; i < mask.length; i++) {
    const m = mask[i];
    if (isPlaceholder(m)) {
      const ch = raw[rawIndex];
      if (ch !== void 0 && PLACEHOLDERS[m].test(ch)) {
        masked += ch;
        rawIndex++;
        lastFilled = i;
      } else if (maskChar) {
        masked += maskChar;
      } else {
        break;
      }
    } else {
      masked += m;
      if (rawIndex > 0 && lastFilled === i - 1) lastFilled = i;
    }
  }
  return { masked, caret: lastFilled + 1 };
};
var extractRaw = (input, mask) => {
  let raw = "";
  let i = 0;
  let j = 0;
  while (i < mask.length && j < input.length) {
    const m = mask[i];
    const ch = input[j];
    if (isPlaceholder(m)) {
      if (PLACEHOLDERS[m].test(ch)) {
        raw += ch;
        i++;
        j++;
      } else {
        j++;
      }
    } else {
      if (ch === m) i++;
      j++;
    }
  }
  return raw;
};
var MaskedInput = _react2.default.forwardRef(
  ({
    mask,
    value: valueProp,
    defaultValue,
    onValueChange,
    maskChar,
    className,
    style,
    disabled,
    ...inputProps
  }, ref) => {
    const controlled = valueProp !== void 0;
    const [uncontrolled, setUncontrolled] = _react2.default.useState(_nullishCoalesce(defaultValue, () => ( "")));
    const raw = controlled ? valueProp : uncontrolled;
    const innerRef = _react2.default.useRef(null);
    _react2.default.useImperativeHandle(ref, () => innerRef.current, []);
    const pendingCaret = _react2.default.useRef(null);
    _react2.default.useEffect(() => {
      if (pendingCaret.current !== null && innerRef.current) {
        const pos = pendingCaret.current;
        innerRef.current.setSelectionRange(pos, pos);
        pendingCaret.current = null;
      }
    });
    const { masked } = applyMask(raw, mask, maskChar);
    const handleChange = (e) => {
      const nextRaw = extractRaw(e.target.value, mask);
      const next = applyMask(nextRaw, mask, maskChar);
      pendingCaret.current = next.caret;
      if (!controlled) setUncontrolled(nextRaw);
      _optionalChain([onValueChange, 'optionalCall', _ => _(nextRaw, next.masked)]);
    };
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "input",
      {
        ref: innerRef,
        type: "text",
        value: masked,
        onChange: handleChange,
        disabled,
        className,
        style,
        ...inputProps
      }
    );
  }
);
MaskedInput.displayName = "MaskedInput";



exports.MaskedInput = MaskedInput;
