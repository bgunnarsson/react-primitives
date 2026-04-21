import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "./chunk-LDOLFYFL.js";

// src/components/TimePicker/TimePicker.tsx
import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var pad = (n) => String(n).padStart(2, "0");
var formatDisplay = (value, hour12, placeholder) => {
  if (!value) return placeholder;
  if (hour12) {
    const suffix = value.hours >= 12 ? "PM" : "AM";
    const h12 = value.hours % 12 === 0 ? 12 : value.hours % 12;
    return `${pad(h12)}:${pad(value.minutes)} ${suffix}`;
  }
  return `${pad(value.hours)}:${pad(value.minutes)}`;
};
var toHour12 = (h24) => ({
  hour: h24 % 12 === 0 ? 12 : h24 % 12,
  period: h24 >= 12 ? "PM" : "AM"
});
var fromHour12 = (hour, period) => {
  if (period === "AM") return hour === 12 ? 0 : hour;
  return hour === 12 ? 12 : hour + 12;
};
var TimePicker = ({
  value: valueProp,
  defaultValue,
  onValueChange,
  step = 1,
  hour12 = false,
  disabled,
  name,
  placeholder = "Pick a time",
  "aria-label": ariaLabel,
  triggerClassName,
  contentClassName,
  columnClassName,
  itemClassName,
  itemSelectedClassName
}) => {
  const [open, setOpen] = React.useState(false);
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolled;
  const current = value ?? { hours: 0, minutes: 0 };
  const h12 = toHour12(current.hours);
  const commit = (next) => {
    if (!controlled) setUncontrolled(next);
    onValueChange?.(next);
  };
  const safeStep = Math.max(1, step);
  const hourList = hour12 ? [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] : Array.from({ length: 24 }, (_, i) => i);
  const minuteList = Array.from({ length: Math.ceil(60 / safeStep) }, (_, i) => i * safeStep).filter((m) => m < 60);
  const hoursRef = React.useRef(null);
  const minutesRef = React.useRef(null);
  const periodRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => {
      for (const ref of [hoursRef, minutesRef, periodRef]) {
        const el = ref.current?.querySelector('[data-selected="true"]');
        el?.scrollIntoView({ block: "center" });
      }
    });
    return () => cancelAnimationFrame(id);
  }, [open]);
  const itemClass = (selected) => {
    if (selected && itemSelectedClassName) {
      return [itemClassName, itemSelectedClassName].filter(Boolean).join(" ");
    }
    return itemClassName;
  };
  const selectHour = (h) => {
    if (hour12) commit({ hours: fromHour12(h, h12.period), minutes: current.minutes });
    else commit({ hours: h, minutes: current.minutes });
  };
  const selectMinute = (m) => commit({ hours: current.hours, minutes: m });
  const selectPeriod = (p) => commit({ hours: fromHour12(h12.hour, p), minutes: current.minutes });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Popover, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(PopoverTrigger, { disabled, className: triggerClassName, "aria-label": ariaLabel, children: formatDisplay(value, hour12, placeholder) }),
      /* @__PURE__ */ jsxs(PopoverContent, { className: contentClassName, children: [
        /* @__PURE__ */ jsx("div", { ref: hoursRef, className: columnClassName, role: "listbox", "aria-label": "Hours", children: hourList.map((h) => {
          const selected = hour12 ? h === h12.hour : h === current.hours;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": selected,
              "data-selected": selected,
              className: itemClass(selected),
              onClick: () => selectHour(h),
              children: hour12 ? String(h) : pad(h)
            },
            h
          );
        }) }),
        /* @__PURE__ */ jsx("div", { ref: minutesRef, className: columnClassName, role: "listbox", "aria-label": "Minutes", children: minuteList.map((m) => {
          const selected = m === current.minutes;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": selected,
              "data-selected": selected,
              className: itemClass(selected),
              onClick: () => selectMinute(m),
              children: pad(m)
            },
            m
          );
        }) }),
        hour12 && /* @__PURE__ */ jsx("div", { ref: periodRef, className: columnClassName, role: "listbox", "aria-label": "AM or PM", children: ["AM", "PM"].map((p) => {
          const selected = p === h12.period;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": selected,
              "data-selected": selected,
              className: itemClass(selected),
              onClick: () => selectPeriod(p),
              children: p
            },
            p
          );
        }) })
      ] })
    ] }),
    name && /* @__PURE__ */ jsx(
      "input",
      {
        type: "hidden",
        name,
        value: value ? `${pad(current.hours)}:${pad(current.minutes)}` : ""
      }
    )
  ] });
};

export {
  TimePicker
};
//# sourceMappingURL=chunk-SG5ZMT6V.js.map