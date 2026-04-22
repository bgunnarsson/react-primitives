"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }



var _chunkAMR32PDCcjs = require('./chunk-AMR32PDC.cjs');

// src/components/DatePicker/DatePicker.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactdaypicker = require('react-day-picker');
var _jsxruntime = require('react/jsx-runtime');
var DatePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = "Pick a date",
  triggerClassName,
  contentClassName,
  calendarClassName
}) => {
  const [open, setOpen] = _react2.default.useState(false);
  const formatted = value ? value.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" }) : placeholder;
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _chunkAMR32PDCcjs.Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkAMR32PDCcjs.PopoverTrigger, { disabled, className: triggerClassName, children: formatted }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkAMR32PDCcjs.PopoverContent, { className: contentClassName, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reactdaypicker.DayPicker,
      {
        mode: "single",
        selected: value,
        onSelect: (day) => {
          _optionalChain([onValueChange, 'optionalCall', _ => _(day)]);
          setOpen(false);
        },
        className: calendarClassName
      }
    ) })
  ] });
};



exports.DatePicker = DatePicker;
