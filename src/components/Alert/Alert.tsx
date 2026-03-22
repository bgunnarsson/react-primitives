import React from 'react'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  heading?: React.ReactNode
  description?: React.ReactNode
}

export const Alert = ({ as: headingLevel, heading, description, children, ...props }: AlertProps) => (
  <div role="alert" {...props}>
    {heading && <AlertTitle as={headingLevel}>{heading}</AlertTitle>}
    {description && <AlertDescription>{description}</AlertDescription>}
    {children}
  </div>
)

export interface AlertTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
export const AlertTitle = ({ as: Tag = 'h5', ...props }: AlertTitleProps) => (
  <Tag {...props} />
)

export interface AlertDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const AlertDescription = (props: AlertDescriptionProps) => (
  <p {...props} />
)
