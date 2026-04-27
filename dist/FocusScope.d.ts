import React__default from 'react'

interface FocusScopeProps extends React__default.HTMLAttributes<HTMLDivElement> {
  trapped?: boolean
  autoFocus?: boolean
  restoreFocus?: boolean
  loop?: boolean
}
declare const FocusScope: React__default.ForwardRefExoticComponent<
  FocusScopeProps & React__default.RefAttributes<HTMLDivElement>
>

export { FocusScope, type FocusScopeProps }
