import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-6M3BXBRW.js";

// src/components/DatePicker/DatePicker.tsx
import React from "react";
import { DayPicker } from "react-day-picker";
import { jsx, jsxs } from "react/jsx-runtime";
var now = /* @__PURE__ */ new Date();
var DEFAULT_START_MONTH = new Date(now.getFullYear() - 100, 0);
var DEFAULT_END_MONTH = new Date(now.getFullYear() + 10, 11);
var DatePicker = ({
  value,
  onValueChange,
  disabled,
  placeholder = "Pick a date",
  captionLayout = "dropdown",
  startMonth = DEFAULT_START_MONTH,
  endMonth = DEFAULT_END_MONTH,
  triggerClassName,
  contentClassName,
  calendarClassName
}) => {
  const [open, setOpen] = React.useState(false);
  const formatted = value ? value.toLocaleDateString(void 0, { year: "numeric", month: "short", day: "numeric" }) : placeholder;
  return /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(PopoverTrigger, { disabled, className: triggerClassName, children: formatted }),
    /* @__PURE__ */ jsx(PopoverContent, { className: contentClassName, children: /* @__PURE__ */ jsx(
      DayPicker,
      {
        mode: "single",
        selected: value,
        onSelect: (day) => {
          onValueChange?.(day);
          setOpen(false);
        },
        captionLayout,
        startMonth,
        endMonth,
        defaultMonth: value,
        className: calendarClassName
      }
    ) })
  ] });
};

export {
  DatePicker
};
