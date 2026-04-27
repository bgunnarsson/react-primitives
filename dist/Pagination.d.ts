import * as react_jsx_runtime from 'react/jsx-runtime'
import React__default from 'react'

interface PaginationProps extends React__default.HTMLAttributes<HTMLElement> {}
declare const Pagination: (props: PaginationProps) => react_jsx_runtime.JSX.Element
interface PaginationContentProps extends React__default.HTMLAttributes<HTMLUListElement> {}
declare const PaginationContent: (props: PaginationContentProps) => react_jsx_runtime.JSX.Element
interface PaginationItemProps extends React__default.HTMLAttributes<HTMLLIElement> {}
declare const PaginationItem: (props: PaginationItemProps) => react_jsx_runtime.JSX.Element
interface PaginationLinkProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}
declare const PaginationLink: ({ isActive, ...props }: PaginationLinkProps) => react_jsx_runtime.JSX.Element
interface PaginationPreviousProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {}
declare const PaginationPrevious: (props: PaginationPreviousProps) => react_jsx_runtime.JSX.Element
interface PaginationNextProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {}
declare const PaginationNext: (props: PaginationNextProps) => react_jsx_runtime.JSX.Element
interface PaginationEllipsisProps extends React__default.HTMLAttributes<HTMLSpanElement> {}
declare const PaginationEllipsis: (props: PaginationEllipsisProps) => react_jsx_runtime.JSX.Element

export {
  Pagination,
  PaginationContent,
  type PaginationContentProps,
  PaginationEllipsis,
  type PaginationEllipsisProps,
  PaginationItem,
  type PaginationItemProps,
  PaginationLink,
  type PaginationLinkProps,
  PaginationNext,
  type PaginationNextProps,
  PaginationPrevious,
  type PaginationPreviousProps,
  type PaginationProps,
}
