// src/components/InputOTP/InputOTP.tsx
import React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { jsx, jsxs } from "react/jsx-runtime";
var InputOTP = React.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx(OTPInput, { ref, ...props })
);
InputOTP.displayName = "InputOTP";
var InputOTPGroup = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className, ...props })
);
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = React.forwardRef(
  ({ index, className, ...props }, ref) => {
    const context = React.useContext(OTPInputContext);
    const slot = context.slots[index];
    if (!slot) return null;
    const { char, hasFakeCaret, isActive } = slot;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        "data-active": isActive ? "" : void 0,
        className,
        ...props,
        children: [
          char,
          hasFakeCaret ? /* @__PURE__ */ jsx("span", { "data-fake-caret": "" }) : null
        ]
      }
    );
  }
);
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = React.forwardRef(
  ({ className, children = "-", ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, role: "separator", className, ...props, children })
);
InputOTPSeparator.displayName = "InputOTPSeparator";

export {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS
};
//# sourceMappingURL=chunk-TR3PD7FD.js.map