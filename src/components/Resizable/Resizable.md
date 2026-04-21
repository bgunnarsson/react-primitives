# Resizable

Resizable split-pane layouts (IDE sidebars, chat UIs, three-column dashboards). Wraps [`react-resizable-panels`](https://react-resizable-panels.vercel.app).

## Import

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@bgunnarsson/react-primitives'
```

## Parts

| Part | Description |
|---|---|
| `ResizablePanelGroup` | Root container. Accepts `orientation` (`'horizontal'` \| `'vertical'`) and an optional `id` for layout persistence. |
| `ResizablePanel` | A single pane. Takes `defaultSize` (percent), `minSize`, `maxSize`, `collapsible`. |
| `ResizableHandle` | Drag affordance between two panels. |

## Usage

```tsx
<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={25} minSize={15}>
    <Sidebar />
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <Main />
  </ResizablePanel>
</ResizablePanelGroup>
```

## Persistence

Give the `ResizablePanelGroup` an `id` to automatically save user-resized layouts to `localStorage`:

```tsx
<ResizablePanelGroup id="main-layout" orientation="horizontal">…</ResizablePanelGroup>
```

## Notes

- Keyboard: focused handles respond to arrow keys (← / → or ↑ / ↓ depending on orientation).
- Sizes are expressed in percent by default. Panels never overlap — `minSize` on adjacent panels prevents collapse.
- `collapsible` on a `ResizablePanel` enables snap-to-collapsed-state when dragged below its `minSize`.
