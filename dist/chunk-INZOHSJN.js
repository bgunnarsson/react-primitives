// src/components/Pagination/Pagination.tsx
import { jsx } from "react/jsx-runtime";
var Pagination = (props) => /* @__PURE__ */ jsx("nav", { "aria-label": "pagination", ...props });
var PaginationContent = (props) => /* @__PURE__ */ jsx("ul", { ...props });
var PaginationItem = (props) => /* @__PURE__ */ jsx("li", { ...props });
var PaginationLink = ({ isActive, ...props }) => /* @__PURE__ */ jsx("a", { "aria-current": isActive ? "page" : void 0, "data-active": isActive || void 0, ...props });
var PaginationPrevious = (props) => /* @__PURE__ */ jsx("a", { "aria-label": "Go to previous page", ...props });
var PaginationNext = (props) => /* @__PURE__ */ jsx("a", { "aria-label": "Go to next page", ...props });
var PaginationEllipsis = (props) => /* @__PURE__ */ jsx("span", { "aria-hidden": "true", ...props, children: props.children ?? "\u2026" });

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
};
//# sourceMappingURL=chunk-INZOHSJN.js.map