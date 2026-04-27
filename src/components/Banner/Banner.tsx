import React from 'react'

interface BannerContextValue {
  dismiss: () => void
}
const BannerContext = React.createContext<BannerContextValue | null>(null)
const useBanner = () => {
  const ctx = React.useContext(BannerContext)
  if (!ctx) throw new Error('Banner subcomponents must be used inside <Banner>')
  return ctx
}

export interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: 'info' | 'success' | 'warning' | 'error' | (string & {})
  role?: React.AriaRole
}

export const Banner = React.forwardRef<HTMLElement, BannerProps>(
  ({ open: openProp, defaultOpen = true, onOpenChange, variant, role = 'status', children, ...rest }, ref) => {
    const [uncontrolled, setUncontrolled] = React.useState(defaultOpen)
    const controlled = openProp !== undefined
    const open = controlled ? !!openProp : uncontrolled

    const dismiss = React.useCallback(() => {
      if (!controlled) setUncontrolled(false)
      onOpenChange?.(false)
    }, [controlled, onOpenChange])

    if (!open) return null

    return (
      <BannerContext.Provider value={{ dismiss }}>
        <section
          ref={ref as React.Ref<HTMLElement>}
          role={role}
          data-variant={variant}
          {...rest}
        >
          {children}
        </section>
      </BannerContext.Provider>
    )
  },
)
Banner.displayName = 'Banner'

export interface BannerIconProps extends React.HTMLAttributes<HTMLSpanElement> {}
export const BannerIcon = React.forwardRef<HTMLSpanElement, BannerIconProps>((props, ref) => (
  <span ref={ref} aria-hidden="true" data-part="icon" {...props} />
))
BannerIcon.displayName = 'BannerIcon'

export interface BannerTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'strong'
}
export const BannerTitle = React.forwardRef<HTMLElement, BannerTitleProps>(({ as: Tag = 'p', ...props }, ref) => {
  const Component = Tag as React.ElementType
  return <Component ref={ref} data-part="title" {...props} />
})
BannerTitle.displayName = 'BannerTitle'

export interface BannerDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export const BannerDescription = React.forwardRef<HTMLParagraphElement, BannerDescriptionProps>((props, ref) => (
  <p ref={ref} data-part="description" {...props} />
))
BannerDescription.displayName = 'BannerDescription'

export interface BannerActionsProps extends React.HTMLAttributes<HTMLDivElement> {}
export const BannerActions = React.forwardRef<HTMLDivElement, BannerActionsProps>((props, ref) => (
  <div ref={ref} data-part="actions" {...props} />
))
BannerActions.displayName = 'BannerActions'

export interface BannerCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const BannerClose = React.forwardRef<HTMLButtonElement, BannerCloseProps>(
  ({ onClick, children, 'aria-label': ariaLabel = 'Dismiss', ...rest }, ref) => {
    const { dismiss } = useBanner()
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        data-part="close"
        onClick={(e) => {
          onClick?.(e)
          if (!e.defaultPrevented) dismiss()
        }}
        {...rest}
      >
        {children ?? '×'}
      </button>
    )
  },
)
BannerClose.displayName = 'BannerClose'
