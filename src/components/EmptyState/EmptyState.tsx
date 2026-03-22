import React from 'react'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {}
export const EmptyState = (props: EmptyStateProps) => <div {...props} />

export interface EmptyStateIconProps extends React.HTMLAttributes<HTMLDivElement> {}
export const EmptyStateIcon = (props: EmptyStateIconProps) => <div {...props} />

export interface EmptyStateTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const EmptyStateTitle = ({ as: Tag = 'h3', ...props }: EmptyStateTitleProps) => <Tag {...props} />

export interface EmptyStateDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const EmptyStateDescription = (props: EmptyStateDescriptionProps) => <p {...props} />

export interface EmptyStateActionProps extends React.HTMLAttributes<HTMLDivElement> {}
export const EmptyStateAction = (props: EmptyStateActionProps) => <div {...props} />
