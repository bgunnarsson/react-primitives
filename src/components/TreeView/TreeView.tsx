import React from 'react'

interface TreeContextValue {
  expanded: Set<string>
  toggle: (id: string) => void
  onSelect?: (id: string) => void
  selected?: string
}

const TreeContext = React.createContext<TreeContextValue | null>(null)
const useTreeContext = () => {
  const ctx = React.useContext(TreeContext)
  if (!ctx) throw new Error('TreeView parts must be rendered inside <TreeView>')
  return ctx
}

export interface TreeViewProps extends React.HTMLAttributes<HTMLUListElement> {
  defaultExpanded?: string[]
  expanded?: string[]
  onExpandedChange?: (ids: string[]) => void
  selected?: string
  onSelectedChange?: (id: string) => void
}

export const TreeView = React.forwardRef<HTMLUListElement, TreeViewProps>(
  (
    { defaultExpanded, expanded: expandedProp, onExpandedChange, selected, onSelectedChange, children, ...props },
    ref
  ) => {
    const [uncontrolled, setUncontrolled] = React.useState<Set<string>>(() => new Set(defaultExpanded ?? []))
    const controlled = expandedProp !== undefined
    const expanded = controlled ? new Set(expandedProp) : uncontrolled

    const toggle = (id: string) => {
      const next = new Set(expanded)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      if (!controlled) setUncontrolled(next)
      onExpandedChange?.(Array.from(next))
    }

    const value: TreeContextValue = {
      expanded,
      toggle,
      selected,
      onSelect: onSelectedChange,
    }

    return (
      <TreeContext.Provider value={value}>
        <ul ref={ref} role="tree" {...props}>
          {children}
        </ul>
      </TreeContext.Provider>
    )
  }
)
TreeView.displayName = 'TreeView'

export interface TreeItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, 'id'> {
  id: string
  label: React.ReactNode
  disabled?: boolean
  labelClassName?: string
  labelStyle?: React.CSSProperties
}

export const TreeItem = React.forwardRef<HTMLLIElement, TreeItemProps>(
  ({ id, label, disabled, children, labelClassName, labelStyle, className, style, ...props }, ref) => {
    const ctx = useTreeContext()
    const hasChildren = React.Children.count(children) > 0
    const isExpanded = ctx.expanded.has(id)
    const isSelected = ctx.selected === id

    const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      if (e.key === 'ArrowRight' && hasChildren && !isExpanded) {
        e.preventDefault()
        ctx.toggle(id)
      } else if (e.key === 'ArrowLeft' && hasChildren && isExpanded) {
        e.preventDefault()
        ctx.toggle(id)
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (hasChildren) ctx.toggle(id)
        ctx.onSelect?.(id)
      }
    }

    return (
      <li
        ref={ref}
        role="treeitem"
        aria-expanded={hasChildren ? isExpanded : undefined}
        aria-selected={isSelected || undefined}
        aria-disabled={disabled || undefined}
        className={className}
        style={style}
        {...props}
      >
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          className={labelClassName}
          style={labelStyle}
          data-selected={isSelected ? '' : undefined}
          data-expanded={isExpanded ? '' : undefined}
          data-has-children={hasChildren ? '' : undefined}
          onKeyDown={onKeyDown}
          onClick={() => {
            if (disabled) return
            if (hasChildren) ctx.toggle(id)
            ctx.onSelect?.(id)
          }}
        >
          {label}
        </div>
        {hasChildren && isExpanded ? <ul role="group">{children}</ul> : null}
      </li>
    )
  }
)
TreeItem.displayName = 'TreeItem'
