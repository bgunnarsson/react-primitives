import React from "react";

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {}
export const Breadcrumbs = (props: BreadcrumbsProps) => (
	<nav aria-label="breadcrumb" {...props} />
);

export interface BreadcrumbsListProps
	extends React.HTMLAttributes<HTMLOListElement> {}
export const BreadcrumbsList = (props: BreadcrumbsListProps) => (
	<ul {...props} />
);

export interface BreadcrumbsItemProps
	extends React.HTMLAttributes<HTMLLIElement> {}
export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => (
	<li {...props} />
);

export interface BreadcrumbsLinkProps
	extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}
export const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => (
	<a {...props} />
);

export interface BreadcrumbsPageProps
	extends React.HTMLAttributes<HTMLSpanElement> {}
export const BreadcrumbsPage = (props: BreadcrumbsPageProps) => (
	<span aria-current="page" {...props} />
);

export interface BreadcrumbsSeparatorProps
	extends React.HTMLAttributes<HTMLSpanElement> {
	separator?: React.ReactNode;
}
export const BreadcrumbsSeparator = ({
	separator,
	children,
	...props
}: BreadcrumbsSeparatorProps) => (
	<span aria-hidden="true" {...props}>
		{children ?? separator ?? "•"}
	</span>
);
