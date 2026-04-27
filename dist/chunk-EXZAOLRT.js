import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-6M3BXBRW.js";

// src/components/DateRangePicker/DateRangePicker.tsx
import React from "react";
import { DayPicker } from "react-day-picker";
import { jsx, jsxs } from "react/jsx-runtime";
var now = /* @__PURE__ */ new Date();
var DEFAULT_START_MONTH = new Date(now.getFullYear() - 100, 0);
var DEFAULT_END_MONTH = new Date(now.getFullYear() + 10, 11);
var defaultFormat = (range, placeholder) => {
  if (!range?.from) return placeholder;
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
  const [open, setOpen] = React.useState(false);
  const clickCount = React.useRef(0);
  const handleOpenChange = (next) => {
    if (next) clickCount.current = 0;
    setOpen(next);
  };
  const label = formatRange ? formatRange(value) : defaultFormat(value, placeholder);
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { disabled, className: triggerClassName, children: label }),
    /* @__PURE__ */ jsx(PopoverContent, { className: contentClassName, children: /* @__PURE__ */ jsx(
      DayPicker,
      {
        mode: "range",
        selected: value,
        onSelect: (range) => {
          onValueChange?.(range);
          clickCount.current += 1;
          if (closeOnSelect && clickCount.current >= 2 && range?.from && range?.to) {
            setOpen(false);
          }
        },
        numberOfMonths,
        captionLayout,
        startMonth,
        endMonth,
        defaultMonth: value?.from,
        className: calendarClassName
      }
    ) })
  ] });
};

export {
  DateRangePicker
};
