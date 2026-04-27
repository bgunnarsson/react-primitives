"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }



var _chunkAMR32PDCcjs = require('./chunk-AMR32PDC.cjs');

// src/components/DateRangePicker/DateRangePicker.tsx
var _react = require('react'); var _react2 = _interopRequireDefault(_react);
var _reactdaypicker = require('react-day-picker');
var _jsxruntime = require('react/jsx-runtime');
var now = /* @__PURE__ */ new Date();
var DEFAULT_START_MONTH = new Date(now.getFullYear() - 100, 0);
var DEFAULT_END_MONTH = new Date(now.getFullYear() + 10, 11);
var defaultFormat = (range, placeholder) => {
  if (!_optionalChain([range, 'optionalAccess', _ => _.from])) return placeholder;
  const fmt = (d) => d.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" });
  if (!range.to) return fmt(range.from);
  return `${fmt(range.from)} \u2013 ${fmt(range.to)}`;
};
var DateRangePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = "Pick a date range",
  numberOfMonths = 2,
  closeOnSelect = true,
  captionLayout = "dropdown",
  startMonth = DEFAULT_START_MONTH,
  endMonth = DEFAULT_END_MONTH,
  formatRange,
  triggerClassName,
  contentClassName,
  calendarClassName
}) => {
  const [open, setOpen] = _react2.default.useState(false);
  const clickCount = _react2.default.useRef(0);
  const handleOpenChange = (next) => {
    if (next) clickCount.current = 0;
    setOpen(next);
  };
  const label = formatRange ? formatRange(value) : defaultFormat(value, placeholder);
  return /* @__PURE__ */ _jsxruntime.jsxs.call(void 0, _chunkAMR32PDCcjs.Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkAMR32PDCcjs.PopoverTrigger, { disabled, className: triggerClassName, children: label }),
    /* @__PURE__ */ _jsxruntime.jsx.call(void 0, _chunkAMR32PDCcjs.PopoverContent, { className: contentClassName, children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 
      _reactdaypicker.DayPicker,
      {
        mode: "range",
        selected: value,
        onSelect: (range) => {
          _optionalChain([onValueChange, 'optionalCall', _2 => _2(range)]);
          clickCount.current += 1;
          if (closeOnSelect && clickCount.current >= 2 && _optionalChain([range, 'optionalAccess', _3 => _3.from]) && _optionalChain([range, 'optionalAccess', _4 => _4.to])) {
            setOpen(false);
          }
        },
        numberOfMonths,
        captionLayout,
        startMonth,
        endMonth,
        defaultMonth: _optionalChain([value, 'optionalAccess', _5 => _5.from]),
        className: calendarClassName
      }
    ) })
  ] });
};



exports.DateRangePicker = DateRangePicker;
