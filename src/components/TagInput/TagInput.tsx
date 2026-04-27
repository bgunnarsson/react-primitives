import React from 'react'

export interface TagInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: string[]
  defaultValue?: string[]
  onValueChange?: (tags: string[]) => void
  placeholder?: string
  disabled?: boolean
  addOnKeys?: string[]
  allowDuplicates?: boolean
  maxTags?: number
  inputClassName?: string
  inputStyle?: React.CSSProperties
  renderTag?: (tag: string, index: number, remove: () => void) => React.ReactNode
}

export const TagInput = React.forwardRef<HTMLDivElement, TagInputProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      placeholder,
      disabled,
      addOnKeys = ['Enter', ','],
      allowDuplicates = false,
      maxTags,
      inputClassName,
      inputStyle,
      renderTag,
      className,
      style,
      ...rest
    },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState<string[]>(defaultValue ?? [])
    const controlled = valueProp !== undefined
    const tags = controlled ? (valueProp as string[]) : uncontrolled
    const [draft, setDraft] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    const setTags = (next: string[]) => {
      if (!controlled) {
        setUncontrolled(next)
      }
      onValueChange?.(next)
    }

    const addTag = (raw: string) => {
      const tag = raw.trim()
      if (!tag) {
        return
      }
      if (!allowDuplicates && tags.includes(tag)) {
        return
      }
      if (maxTags !== undefined && tags.length >= maxTags) {
        return
      }
      setTags([...tags, tag])
    }

    const removeAt = (i: number) => {
      setTags(tags.filter((_, idx) => idx !== i))
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (addOnKeys.includes(e.key)) {
        if (draft.trim()) {
          e.preventDefault()
          addTag(draft)
          setDraft('')
        }
        return
      }
      if (e.key === 'Backspace' && draft === '' && tags.length > 0) {
        e.preventDefault()
        removeAt(tags.length - 1)
      }
    }

    return (
      // biome-ignore lint/a11y/noStaticElementInteractions: click is a focus-forwarder to the inner <input>, which owns keyboard interaction
      // biome-ignore lint/a11y/useKeyWithClickEvents: click only forwards focus; keyboard control lives on the inner <input>
      <div
        ref={ref}
        className={className}
        style={style}
        data-disabled={disabled || undefined}
        onClick={() => inputRef.current?.focus()}
        {...rest}
      >
        {tags.map((tag, i) => {
          const remove = () => removeAt(i)
          if (renderTag) {
            return <React.Fragment key={`${tag}-${i}`}>{renderTag(tag, i, remove)}</React.Fragment>
          }
          return (
            <span key={`${tag}-${i}`} data-tag>
              {tag}
              <button
                type="button"
                aria-label={`Remove ${tag}`}
                onClick={(e) => {
                  e.stopPropagation()
                  remove()
                }}
                disabled={disabled}
              >
                ×
              </button>
            </span>
          )
        })}
        <input
          ref={inputRef}
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          onBlur={() => {
            if (draft.trim()) {
              addTag(draft)
              setDraft('')
            }
          }}
          placeholder={tags.length === 0 ? placeholder : undefined}
          disabled={disabled}
          className={inputClassName}
          style={inputStyle}
        />
      </div>
    )
  }
)
TagInput.displayName = 'TagInput'
