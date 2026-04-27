import type React from 'react'

export interface RichtextProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string
}

export const Richtext = ({ html, className, ...props }: RichtextProps) => (
  // biome-ignore lint/security/noDangerouslySetInnerHtml: rendering pre-sanitized HTML is the explicit purpose of this component; consumers must sanitize before passing
  <div dangerouslySetInnerHTML={{ __html: html }} className={className} {...props} />
)
