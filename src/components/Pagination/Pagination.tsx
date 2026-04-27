import type React from 'react'

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {}
export const Pagination = (props: PaginationProps) => <nav aria-label="pagination" {...props} />

export interface PaginationContentProps extends React.HTMLAttributes<HTMLUListElement> {}
export const PaginationContent = (props: PaginationContentProps) => <ul {...props} />

export interface PaginationItemProps extends React.HTMLAttributes<HTMLLIElement> {}
export const PaginationItem = (props: PaginationItemProps) => <li {...props} />

export interface PaginationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isActive?: boolean
}
export const PaginationLink = ({ isActive, ...props }: PaginationLinkProps) => (
  <a aria-current={isActive ? 'page' : undefined} data-active={isActive || undefined} {...props} />
)

export interface PaginationPreviousProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export const PaginationPrevious = (props: PaginationPreviousProps) => (
  // biome-ignore lint/a11y/useAriaPropsSupportedByRole: consumer supplies href (link role) which supports aria-label
  <a aria-label="Go to previous page" {...props} />
)

export interface PaginationNextProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export const PaginationNext = (props: PaginationNextProps) => (
  // biome-ignore lint/a11y/useAriaPropsSupportedByRole: consumer supplies href (link role) which supports aria-label
  <a aria-label="Go to next page" {...props} />
)

export interface PaginationEllipsisProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const PaginationEllipsis = (props: PaginationEllipsisProps) => (
  <span aria-hidden="true" {...props}>
    {props.children ?? '…'}
  </span>
)
