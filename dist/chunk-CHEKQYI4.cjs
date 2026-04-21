"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }// src/components/TimePicker/TimePicker.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _jsxruntime = require('react/jsx-runtime');
var pad = (n) => String(n).padStart(2, "0");
var clamp = (n, min, max) => Math.min(Math.max(n, min), max);
var parse = (str, hour12) => {
  const trimmed = str.trim().toLowerCase();
  const ampm = /\s*(am|pm)$/.exec(trimmed);
  const raw = ampm ? trimmed.replace(/\s*(am|pm)$/, "") : trimmed;
  const [hStr, mStr] = raw.split(":");
  if (hStr === void 0 || mStr === void 0) return null;
  let hours = parseInt(hStr, 10);
  const minutes = parseInt(mStr, 10);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  if (hour12 && ampm) {
    const suffix = ampm[1];
    if (suffix === "pm" && hours < 12) hours += 12;
    if (suffix === "am" && hours === 12) hours = 0;
  }
  return {
    hours: clamp(hours, 0, 23),
    minutes: clamp(minutes, 0, 59)
  };
};
var format = (value, hour12) => {
  if (hour12) {
    const suffix = value.hours >= 12 ? "PM" : "AM";
    const h12 = value.hours % 12 === 0 ? 12 : value.hours % 12;
    return `${pad(h12)}:${pad(value.minutes)} ${suffix}`;
  }
  return `${pad(value.hours)}:${pad(value.minutes)}`;
};
var TimePicker = _react2.default.forwardRef(
  ({
    value: valueProp,
    defaultValue,
    onValueChange,
    step = 1,
    hour12 = false,
    disabled,
    name,
    inputClassName,
    inputStyle,
    className,
    style,
    "aria-label": ariaLabel = "Time",
    ...rest
  }, ref) => {
    const [uncontrolled, setUncontrolled] = _react2.default.useState(
      _nullishCoalesce(defaultValue, () => ( { hours: 0, minutes: 0 }))
    );
    const controlled = valueProp !== void 0;
    const value = controlled ? valueProp : uncontrolled;
    const [draft, setDraft] = _react2.default.useState(null);
    const commit = (next) => {
      if (!controlled) setUncontrolled(next);
      _optionalChain([onValueChange, 'optionalCall', _ => _(next)]);
    };
    const displayValue = _nullishCoalesce(draft, () => ( format(value, hour12)));
    return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, "div", { ref, className, style, ...rest, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      "input",
      {
        type: "text",
        name,
        value: displayValue,
        disabled,
        "aria-label": ariaLabel,
        inputMode: "numeric",
        className: inputClassName,
        style: inputStyle,
        onChange: (e) => setDraft(e.target.value),
        onBlur: () => {
          if (draft == null) return;
          const parsed = parse(draft, hour12);
          if (parsed) commit(parsed);
          setDraft(null);
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();
            const direction = e.key === "ArrowUp" ? 1 : -1;
            const total = value.hours * 60 + value.minutes + direction * step;
            const wrapped = (total % 1440 + 1440) % 1440;
            commit({ hours: Math.floor(wrapped / 60), minutes: wrapped % 60 });
            setDraft(null);
          } else if (e.key === "Enter") {
            e.preventDefault();
            e.currentTarget.blur();
          }
        }
      }
    ) });
  }
);
TimePicker.displayName = "TimePicker";



exports.TimePicker = TimePicker;
//# sourceMappingURL=chunk-CHEKQYI4.cjs.map