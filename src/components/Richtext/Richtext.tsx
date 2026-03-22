import React from 'react'

export interface RichtextProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string
}

export const Richtext = ({ html, className, ...props }: RichtextProps) => (
  // eslint-disable-next-line react/no-danger
  <div dangerouslySetInnerHTML={{ __html: html }} className={className} {...props} />
)
