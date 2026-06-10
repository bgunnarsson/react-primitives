import * as react_jsx_runtime from 'react/jsx-runtime';
import React__default from 'react';

interface BreadcrumbsProps extends React__default.HTMLAttributes<HTMLElement> {
}
declare const Breadcrumbs: (props: BreadcrumbsProps) => react_jsx_runtime.JSX.Element;
interface BreadcrumbsListProps extends React__default.HTMLAttributes<HTMLOListElement> {
}
declare const BreadcrumbsList: (props: BreadcrumbsListProps) => react_jsx_runtime.JSX.Element;
interface BreadcrumbsItemProps extends React__default.HTMLAttributes<HTMLLIElement> {
}
declare const BreadcrumbsItem: (props: BreadcrumbsItemProps) => react_jsx_runtime.JSX.Element;
interface BreadcrumbsLinkProps extends React__default.AnchorHTMLAttributes<HTMLAnchorElement> {
}
declare const BreadcrumbsLink: (props: BreadcrumbsLinkProps) => react_jsx_runtime.JSX.Element;
interface BreadcrumbsPageProps extends React__default.HTMLAttributes<HTMLSpanElement> {
}
declare const BreadcrumbsPage: (props: BreadcrumbsPageProps) => react_jsx_runtime.JSX.Element;
interface BreadcrumbsSeparatorProps extends React__default.HTMLAttributes<HTMLSpanElement> {
    separator?: React__default.ReactNode;
}
declare const BreadcrumbsSeparator: ({ separator, children, ...props }: BreadcrumbsSeparatorProps) => react_jsx_runtime.JSX.Element;

export { Breadcrumbs, BreadcrumbsItem, type BreadcrumbsItemProps, BreadcrumbsLink, type BreadcrumbsLinkProps, BreadcrumbsList, type BreadcrumbsListProps, BreadcrumbsPage, type BreadcrumbsPageProps, type BreadcrumbsProps, BreadcrumbsSeparator, type BreadcrumbsSeparatorProps };
