// src/components/TreeView/TreeView.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var TreeContext = React.createContext(null);
var useTreeContext = () => {
  const ctx = React.useContext(TreeContext);
  if (!ctx) throw new Error("TreeView parts must be rendered inside <TreeView>");
  return ctx;
};
var TreeView = React.forwardRef(
  ({ defaultExpanded, expanded: expandedProp, onExpandedChange, selected, onSelectedChange, children, ...props }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState(
      () => new Set(defaultExpanded ?? [])
    );
    const controlled = expandedProp !== void 0;
    const expanded = controlled ? new Set(expandedProp) : uncontrolled;
    const toggle = (id) => {
      const next = new Set(expanded);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      if (!controlled) setUncontrolled(next);
      onExpandedChange?.(Array.from(next));
    };
    const value = {
      expanded,
      toggle,
      selected,
      onSelect: onSelectedChange
    };
    return /* @__PURE__ */ jsx(TreeContext.Provider, { value, children: /* @__PURE__ */ jsx("ul", { ref, role: "tree", ...props, children }) });
  }
);
TreeView.displayName = "TreeView";
var TreeItem = React.forwardRef(
  ({ id, label, disabled, children, labelClassName, labelStyle, className, style, ...props }, ref) => {
    const ctx = useTreeContext();
    const hasChildren = React.Children.count(children) > 0;
    const isExpanded = ctx.expanded.has(id);
    const isSelected = ctx.selected === id;
    const onKeyDown = (e) => {
      if (disabled) return;
      if (e.key === "ArrowRight" && hasChildren && !isExpanded) {
        e.preventDefault();
        ctx.toggle(id);
      } else if (e.key === "ArrowLeft" && hasChildren && isExpanded) {
        e.preventDefault();
        ctx.toggle(id);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (hasChildren) ctx.toggle(id);
        ctx.onSelect?.(id);
      }
    };
    return /* @__PURE__ */ jsxs(
      "li",
      {
        ref,
        role: "treeitem",
        "aria-expanded": hasChildren ? isExpanded : void 0,
        "aria-selected": isSelected || void 0,
        "aria-disabled": disabled || void 0,
        className,
        style,
        ...props,
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              role: "button",
              tabIndex: disabled ? -1 : 0,
              className: labelClassName,
              style: labelStyle,
              "data-selected": isSelected ? "" : void 0,
              "data-expanded": isExpanded ? "" : void 0,
              "data-has-children": hasChildren ? "" : void 0,
              onKeyDown,
              onClick: () => {
                if (disabled) return;
                if (hasChildren) ctx.toggle(id);
                ctx.onSelect?.(id);
              },
              children: label
            }
          ),
          hasChildren && isExpanded ? /* @__PURE__ */ jsx("ul", { role: "group", children }) : null
        ]
      }
    );
  }
);
TreeItem.displayName = "TreeItem";

export {
  TreeView,
  TreeItem
};
