// src/components/TagInput/TagInput.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var TagInput = React.forwardRef(
  ({
    value: valueProp,
    defaultValue,
    onValueChange,
    placeholder,
    disabled,
    addOnKeys = ["Enter", ","],
    allowDuplicates = false,
    maxTags,
    inputClassName,
    inputStyle,
    renderTag,
    className,
    style,
    ...rest
  }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultValue ?? []);
    const controlled = valueProp !== void 0;
    const tags = controlled ? valueProp : uncontrolled;
    const [draft, setDraft] = React.useState("");
    const inputRef = React.useRef(null);
    const setTags = (next) => {
      if (!controlled) setUncontrolled(next);
      onValueChange?.(next);
    };
    const addTag = (raw) => {
      const tag = raw.trim();
      if (!tag) return;
      if (!allowDuplicates && tags.includes(tag)) return;
      if (maxTags !== void 0 && tags.length >= maxTags) return;
      setTags([...tags, tag]);
    };
    const removeAt = (i) => {
      setTags(tags.filter((_, idx) => idx !== i));
    };
    const onKeyDown = (e) => {
      if (addOnKeys.includes(e.key)) {
        if (draft.trim()) {
          e.preventDefault();
          addTag(draft);
          setDraft("");
        }
        return;
      }
      if (e.key === "Backspace" && draft === "" && tags.length > 0) {
        e.preventDefault();
        removeAt(tags.length - 1);
      }
    };
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className,
        style,
        "data-disabled": disabled || void 0,
        onClick: () => inputRef.current?.focus(),
        ...rest,
        children: [
          tags.map((tag, i) => {
            const remove = () => removeAt(i);
            if (renderTag) return /* @__PURE__ */ jsx(React.Fragment, { children: renderTag(tag, i, remove) }, `${tag}-${i}`);
            return /* @__PURE__ */ jsxs("span", { "data-tag": true, children: [
              tag,
              /* @__PURE__ */ jsx(
                "button",
                {
                  type: "button",
                  "aria-label": `Remove ${tag}`,
                  onClick: (e) => {
                    e.stopPropagation();
                    remove();
                  },
                  disabled,
                  children: "\xD7"
                }
              )
            ] }, `${tag}-${i}`);
          }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "text",
              value: draft,
              onChange: (e) => setDraft(e.target.value),
              onKeyDown,
              onBlur: () => {
                if (draft.trim()) {
                  addTag(draft);
                  setDraft("");
                }
              },
              placeholder: tags.length === 0 ? placeholder : void 0,
              disabled,
              className: inputClassName,
              style: inputStyle
            }
          )
        ]
      }
    );
  }
);
TagInput.displayName = "TagInput";

export {
  TagInput
};
