import React from 'react'

export interface CopyButtonRenderState {
  copied: boolean
  copy: () => Promise<void>
  error: Error | null
}

export interface CopyButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onCopy' | 'onError'> {
  /** Text to copy to the clipboard. Either `value` or `getValue` is required. */
  value?: string
  /** Lazily resolves the value when the button is pressed (useful for large or async sources). */
  getValue?: () => string | Promise<string>
  /** How long the copied state stays true (ms). */
  resetMs?: number
  /** Called after a successful copy. */
  onCopy?: (value: string) => void
  /** Called when the clipboard write fails. */
  onError?: (error: Error) => void
  /** Render-prop children. Receives copied state and the copy handler. */
  children?: React.ReactNode | ((state: CopyButtonRenderState) => React.ReactNode)
}

const writeToClipboard = async (value: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }
  if (typeof document === 'undefined') {
    throw new Error('Clipboard API is not available in this environment')
  }
  const ta = document.createElement('textarea')
  ta.value = value
  ta.setAttribute('readonly', '')
  ta.style.position = 'fixed'
  ta.style.opacity = '0'
  document.body.appendChild(ta)
  ta.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(ta)
  if (!ok) throw new Error('Failed to copy')
}

export const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      value,
      getValue,
      resetMs = 2000,
      onCopy,
      onError,
      onClick,
      children,
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false)
    const [error, setError] = React.useState<Error | null>(null)
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    React.useEffect(
      () => () => {
        if (timer.current) clearTimeout(timer.current)
      },
      [],
    )

    const copy = React.useCallback(async () => {
      try {
        const v = getValue ? await getValue() : (value ?? '')
        await writeToClipboard(v)
        setError(null)
        setCopied(true)
        onCopy?.(v)
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => setCopied(false), resetMs)
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e))
        setError(err)
        setCopied(false)
        onError?.(err)
      }
    }, [value, getValue, resetMs, onCopy, onError])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e)
      if (e.defaultPrevented) return
      void copy()
    }

    const renderState: CopyButtonRenderState = { copied, copy, error }
    const label = ariaLabel ?? (copied ? 'Copied' : 'Copy to clipboard')

    return (
      <button
        ref={ref}
        type={type}
        data-state={copied ? 'copied' : 'idle'}
        aria-label={label}
        onClick={handleClick}
        {...rest}
      >
        {typeof children === 'function'
          ? children(renderState)
          : (children ?? (copied ? 'Copied' : 'Copy'))}
      </button>
    )
  },
)
CopyButton.displayName = 'CopyButton'
