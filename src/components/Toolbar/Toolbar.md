# Toolbar

An accessible container for grouping interactive controls (buttons, links, toggle groups) with roving-focus keyboard navigation. Wraps `@radix-ui/react-toolbar`.

## Import

```tsx
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@bgunnarsson/react-primitives'
```

## Parts

| Part | Description |
|---|---|
| `Toolbar` | Root element. Accepts an `orientation` prop (`horizontal` \| `vertical`). |
| `ToolbarButton` | A `<button>` in the toolbar. |
| `ToolbarLink` | An `<a>` in the toolbar. |
| `ToolbarSeparator` | Visual separator between groups. |
| `ToolbarToggleGroup` | Group of mutually-exclusive or multi-select toggles. |
| `ToolbarToggleItem` | Individual toggle inside a `ToolbarToggleGroup`. |

## Usage

```tsx
<Toolbar aria-label="Formatting">
  <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
    <ToolbarToggleItem value="bold">B</ToolbarToggleItem>
    <ToolbarToggleItem value="italic">I</ToolbarToggleItem>
  </ToolbarToggleGroup>
  <ToolbarSeparator />
  <ToolbarButton onClick={save}>Save</ToolbarButton>
</Toolbar>
```

## Notes

- Arrow keys move focus between toolbar items (respecting `orientation`).
- `Home` / `End` jump to first / last item.
- Always provide an `aria-label` on `Toolbar` and each `ToolbarToggleGroup`.
