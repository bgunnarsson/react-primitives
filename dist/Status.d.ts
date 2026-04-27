import React__default from 'react'

type StatusValue = 'online' | 'offline' | 'busy' | 'away' | 'idle' | (string & {})
interface StatusProps extends React__default.HTMLAttributes<HTMLSpanElement> {
  value?: StatusValue
  label?: string
  showLabel?: boolean
}
declare const Status: React__default.ForwardRefExoticComponent<
  StatusProps & React__default.RefAttributes<HTMLSpanElement>
>
interface StatusIndicatorProps extends React__default.HTMLAttributes<HTMLSpanElement> {}
declare const StatusIndicator: React__default.ForwardRefExoticComponent<
  StatusIndicatorProps & React__default.RefAttributes<HTMLSpanElement>
>
interface StatusLabelProps extends React__default.HTMLAttributes<HTMLSpanElement> {}
declare const StatusLabel: React__default.ForwardRefExoticComponent<
  StatusLabelProps & React__default.RefAttributes<HTMLSpanElement>
>

export { Status, StatusIndicator, type StatusIndicatorProps, StatusLabel, type StatusLabelProps, type StatusProps }
