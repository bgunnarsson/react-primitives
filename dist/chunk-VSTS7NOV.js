// src/components/MaskedInput/MaskedInput.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
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
var MaskedInput = React.forwardRef(
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
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? "");
    const raw = controlled ? valueProp : uncontrolled;
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current, []);
    const pendingCaret = React.useRef(null);
    React.useEffect(() => {
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
      onValueChange?.(nextRaw, next.masked);
    };
    return /* @__PURE__ */ jsx(
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

export {
  MaskedInput
};
