# TreeView

An accessible hierarchical tree (ARIA `tree` / `treeitem` / `group`) with expand/collapse and selection. Zero external dependencies.

## Import

```tsx
import { TreeView, TreeItem } from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
const [selected, setSelected] = useState<string>()

<TreeView defaultExpanded={['src']} selected={selected} onSelectedChange={setSelected}>
  <TreeItem id="src" label="src">
    <TreeItem id="src/components" label="components">
      <TreeItem id="src/components/Button.tsx" label="Button.tsx" />
    </TreeItem>
    <TreeItem id="src/index.ts" label="index.ts" />
  </TreeItem>
  <TreeItem id="README.md" label="README.md" />
</TreeView>
```

## `TreeView` props

| Prop | Type | Description |
|---|---|---|
| `defaultExpanded` | `string[]` | Initially-expanded item ids (uncontrolled). |
| `expanded` | `string[]` | Controlled list of expanded ids. |
| `onExpandedChange` | `(ids: string[]) => void` | Called when expansion changes. |
| `selected` | `string` | Controlled selected id. |
| `onSelectedChange` | `(id: string) => void` | Called when selection changes. |

## `TreeItem` props

| Prop | Type | Description |
|---|---|---|
| `id` | `string` (required) | Unique id — used for selection and expansion tracking. |
| `label` | `ReactNode` | Visible label. |
| `children` | `ReactNode` | Nested `TreeItem`s. Presence makes the item expandable. |
| `disabled` | `boolean` | Prevent interaction. |
| `labelClassName` / `labelStyle` | — | Style the clickable label row (not the `<li>` itself). |

## Keyboard

| Key | Behavior |
|---|---|
| `→` | Expand the focused item (if collapsed). |
| `←` | Collapse the focused item (if expanded). |
| `Enter` / `Space` | Toggle expansion and select. |
| `Tab` | Move between focusable items. |

## Styling

- `[role="treeitem"]`: the list item.
- `[role="button"]` inside: the focusable / clickable label row.
- Attributes on the label row: `[data-selected]`, `[data-expanded]`, `[data-has-children]`.
- Nested `[role="group"]` is the UL that wraps child items — indent it with padding.

## Notes

- This primitive intentionally implements a subset of the WAI-ARIA tree pattern (Tab-based focus, not the roving-focus variant). For complex trees with drag-and-drop or virtualization, consider `react-arborist` directly.
