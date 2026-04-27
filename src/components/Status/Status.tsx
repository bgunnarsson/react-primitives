import React from 'react'

type StatusValue = 'online' | 'offline' | 'busy' | 'away' | 'idle' | (string & {})

export interface StatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: StatusValue
  label?: string
  showLabel?: boolean
}

export const Status = React.forwardRef<HTMLSpanElement, StatusProps>(
  ({ value, label, showLabel = false, children, ...rest }, ref) => {
    const visualLabel = label ?? (typeof value === 'string' ? value : undefined)
    const hasChildren = React.Children.count(children) > 0
    return (
      <span
        ref={ref}
        role="status"
        data-status={value}
        aria-label={!showLabel && !hasChildren ? visualLabel : label}
        {...rest}
      >
        {hasChildren ? (
          children
        ) : (
          <>
            <StatusIndicator />
            {showLabel && visualLabel ? <StatusLabel>{visualLabel}</StatusLabel> : null}
          </>
        )}
      </span>
    )
  }
)
Status.displayName = 'Status'

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const StatusIndicator = React.forwardRef<HTMLSpanElement, StatusIndicatorProps>((props, ref) => (
  <span ref={ref} aria-hidden="true" data-part="indicator" {...props} />
))
StatusIndicator.displayName = 'StatusIndicator'

export interface StatusLabelProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const StatusLabel = React.forwardRef<HTMLSpanElement, StatusLabelProps>((props, ref) => (
  <span ref={ref} data-part="label" {...props} />
))
StatusLabel.displayName = 'StatusLabel'
