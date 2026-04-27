// src/components/CopyButton/CopyButton.tsx
import React from "react";
import { jsx } from "react/jsx-runtime";
var writeToClipboard = async (value) => {
  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
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
var CopyButton = React.forwardRef(
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
    const [copied, setCopied] = React.useState(false);
    const [error, setError] = React.useState(null);
    const timer = React.useRef(null);
    React.useEffect(
      () => () => {
        if (timer.current) clearTimeout(timer.current);
      },
      []
    );
    const copy = React.useCallback(async () => {
      try {
        const v = getValue ? await getValue() : value ?? "";
        await writeToClipboard(v);
        setError(null);
        setCopied(true);
        onCopy?.(v);
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), resetMs);
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        setError(err);
        setCopied(false);
        onError?.(err);
      }
    }, [value, getValue, resetMs, onCopy, onError]);
    const handleClick = (e) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      void copy();
    };
    const renderState = { copied, copy, error };
    const label = ariaLabel ?? (copied ? "Copied" : "Copy to clipboard");
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type,
        "data-state": copied ? "copied" : "idle",
        "aria-label": label,
        onClick: handleClick,
        ...rest,
        children: typeof children === "function" ? children(renderState) : children ?? (copied ? "Copied" : "Copy")
      }
    );
  }
);
CopyButton.displayName = "CopyButton";

export {
  CopyButton
};
