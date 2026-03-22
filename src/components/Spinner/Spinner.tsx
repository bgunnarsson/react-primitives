import React from 'react'

export interface SpinnerProps extends React.SVGAttributes<SVGElement> {
  size?: number
}

export const Spinner = ({ className, size = 24, ...props }: SpinnerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Loading"
    role="status"
    className={className}
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)
