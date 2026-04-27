import React__default from 'react'

interface TreeViewProps extends React__default.HTMLAttributes<HTMLUListElement> {
  defaultExpanded?: string[]
  expanded?: string[]
  onExpandedChange?: (ids: string[]) => void
  selected?: string
  onSelectedChange?: (id: string) => void
}
declare const TreeView: React__default.ForwardRefExoticComponent<
  TreeViewProps & React__default.RefAttributes<HTMLUListElement>
>
interface TreeItemProps extends Omit<React__default.LiHTMLAttributes<HTMLLIElement>, 'id'> {
  id: string
  label: React__default.ReactNode
  disabled?: boolean
  labelClassName?: string
  labelStyle?: React__default.CSSProperties
}
declare const TreeItem: React__default.ForwardRefExoticComponent<
  TreeItemProps & React__default.RefAttributes<HTMLLIElement>
>

export { TreeItem, type TreeItemProps, TreeView, type TreeViewProps }
