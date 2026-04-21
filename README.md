# @bgunnarsson/react-primitives

An unstyled, accessible React component library. Built on [Radix UI](https://www.radix-ui.com/) primitives — components ship with zero CSS and are styled entirely via `className` in the consuming project.


## Philosophy

- **Unstyled by default** — no opinions on colors, spacing, or typography. Apply Tailwind or any CSS solution via `className`.
- **Accessible** — Radix UI handles ARIA attributes, keyboard navigation, and focus management out of the box.
- **Composable** — compound component pattern throughout. Each named part (trigger, content, item, etc.) is a separate export that accepts `className`.
- **Framework-agnostic styling** — works with Tailwind CSS v3/v4, CSS Modules, plain CSS, or any other approach.

## Installation

```bash
pnpm add @bgunnarsson/react-primitives
```

### Peer dependencies

```bash
pnpm add react react-dom
```

## Usage

Import components directly from the package:

```tsx
import { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle } from '@bgunnarsson/react-primitives'

export function MyComponent() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-6 shadow-xl">
          <DialogTitle className="text-lg font-semibold">Hello</DialogTitle>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

### Lightbox CSS

If you use the `Lightbox` component, import its stylesheet once in your app entry or layout:

```ts
import 'yet-another-react-lightbox/styles.css'
```

### Toaster

Place `<Toaster>` once in your root layout to enable toast notifications:

```tsx
import { Toaster } from '@bgunnarsson/react-primitives'

export default function Layout({ children }) {
  return <>{children}<Toaster /></>
}
```

## Development

```bash
pnpm dev          # Start Storybook on http://localhost:6006
pnpm build        # Build the library (ESM + CJS + types)
pnpm build-storybook  # Build static Storybook
```

## Component Reference

77 components across layout, form, navigation, overlay, media, and low-level utility categories.

### Layout & Content

| Component | Description |
|---|---|
| [AspectRatio](src/components/AspectRatio/README.md) | Container that locks children to a fixed width/height ratio |
| [Card](src/components/Card/README.md) | Flexible container for composing any card layout |
| [CodeBlock](src/components/CodeBlock/README.md) | Code display with title, copy button, and optional syntax highlighting |
| [Container](src/components/Container/README.md) | Generic div wrapper accepting all HTML attributes |
| [EmptyState](src/components/EmptyState/README.md) | Zero-data placeholder with icon, title, description, and action |
| [Footer](src/components/Footer/README.md) | Semantic `<footer>` wrapper |
| [Grid](src/components/Grid/README.md) | CSS grid container and item wrapper |
| [Header](src/components/Header/README.md) | Semantic `<header>` wrapper |
| [Resizable](src/components/Resizable/README.md) | Resizable split-pane layouts (IDE sidebars, chat UIs) |
| [ScrollArea](src/components/ScrollArea/README.md) | Scrollable container with custom scrollbars |
| [Separator](src/components/Separator/README.md) | Horizontal or vertical dividing line |
| [Skeleton](src/components/Skeleton/README.md) | Loading placeholder element |
| [Stat](src/components/Stat/README.md) | Metric display with label, value, and help text |
| [Table](src/components/Table/README.md) | Semantic table with Header, Body, Footer, Row, Head, Cell, Caption |
| [Text](src/components/Text/README.md) | Polymorphic text element (`p`, `span`, `h1`–`h6`) |

### Typography & Media

| Component | Description |
|---|---|
| [Badge](src/components/Badge/README.md) | Inline label for status, counts, or categories |
| [Icon](src/components/Icon/README.md) | SVG icon from sprite or external file |
| [Kbd](src/components/Kbd/README.md) | Semantic `<kbd>` wrapper for keyboard shortcut hints |
| [Lightbox](src/components/Lightbox/README.md) | Full-screen image viewer with navigation |
| [Picture](src/components/Picture/README.md) | Responsive `<picture>` with multiple sources |
| [Richtext](src/components/Richtext/README.md) | CMS HTML string renderer |
| [Spinner](src/components/Spinner/README.md) | Animated loading indicator |
| [VideoPlayer](src/components/VideoPlayer/README.md) | HTML5 video wrapper |

### Form

| Component | Description |
|---|---|
| [Button](src/components/Button/README.md) | Unstyled button element |
| [Calendar](src/components/Calendar/README.md) | Inline calendar for single, range, or multiple date selection |
| [Checkbox](src/components/Checkbox/README.md) | Accessible checkbox with built-in indicator |
| [CheckboxGroup](src/components/CheckboxGroup/README.md) | Controlled group of labelled checkboxes |
| [ColorPicker](src/components/ColorPicker/README.md) | Hex, RGBA, and HSLA color pickers |
| [Combobox](src/components/Combobox/README.md) | Searchable dropdown select |
| [DatePicker](src/components/DatePicker/README.md) | Single date picker with calendar popover |
| [FileInput](src/components/FileInput/README.md) | File picker with drag-and-drop support |
| [Form](src/components/Form/README.md) | Context-based field wrapper (label, control, error message) |
| [Input](src/components/Input/README.md) | Text input field |
| [InputOTP](src/components/InputOTP/README.md) | One-time-password / verification-code input |
| [Label](src/components/Label/README.md) | Form field label |
| [NumberInput](src/components/NumberInput/README.md) | Numeric input with increment/decrement buttons |
| [RadioGroup](src/components/RadioGroup/README.md) | Radio button group |
| [Rating](src/components/Rating/README.md) | Star / score rating input with keyboard and screen-reader support |
| [Select](src/components/Select/README.md) | Dropdown select with groups and separators |
| [Slider](src/components/Slider/README.md) | Accessible range slider |
| [Switch](src/components/Switch/README.md) | Toggle switch |
| [TagInput](src/components/TagInput/README.md) | Multi-value chip/token input |
| [Textarea](src/components/Textarea/README.md) | Multi-line text input |
| [TimePicker](src/components/TimePicker/README.md) | Time input with keyboard stepping and 12/24h formats |

### Navigation

| Component | Description |
|---|---|
| [Breadcrumbs](src/components/Breadcrumb/README.md) | Navigation trail with current page indicator |
| [Link](src/components/Link/README.md) | Anchor element |
| [Menubar](src/components/Menubar/README.md) | Desktop-style application menu bar |
| [Nav](src/components/Nav/README.md) | Semantic `<nav>`, `<ul>`, `<li>` wrappers |
| [NavigationMenu](src/components/NavigationMenu/README.md) | Site-header navigation with mega-menu support |
| [Pagination](src/components/Pagination/README.md) | Page navigation with prev, next, and ellipsis |
| [Stepper](src/components/Stepper/README.md) | Multi-step progress indicator |
| [Tabs](src/components/Tabs/README.md) | Tabbed panel interface |
| [TreeView](src/components/TreeView/README.md) | Hierarchical tree with expand/collapse and selection |

### Overlay & Popover

| Component | Description |
|---|---|
| [AlertDialog](src/components/AlertDialog/README.md) | Confirmation dialog for destructive actions |
| [Command](src/components/Command/README.md) | Command palette (⌘K) — inline or as a modal |
| [ContextMenu](src/components/ContextMenu/README.md) | Right-click menu |
| [Dialog](src/components/Dialog/README.md) | Modal dialog |
| [Drawer](src/components/Drawer/README.md) | Bottom sheet with drag-to-dismiss |
| [DropdownMenu](src/components/DropdownMenu/README.md) | Button-triggered dropdown menu |
| [HoverCard](src/components/HoverCard/README.md) | Hover-triggered preview popover |
| [Popover](src/components/Popover/README.md) | Click-triggered floating panel |
| [Sheet](src/components/Sheet/README.md) | Sliding panel from any screen edge |
| [Toaster](src/components/Toast/README.md) | Toast notification system |
| [Tooltip](src/components/Tooltip/README.md) | Hover/focus tooltip |

### Disclosure & Interaction

| Component | Description |
|---|---|
| [Accordion](src/components/Accordion/README.md) | Expandable sections (single or multiple) |
| [Carousel](src/components/Carousel/README.md) | Touch-friendly slideshow |
| [Collapsible](src/components/Collapsible/README.md) | Single expandable section |
| [Progress](src/components/Progress/README.md) | Progress bar (0–100) |
| [Toggle](src/components/Toggle/README.md) | Pressed/unpressed button |
| [ToggleGroup](src/components/ToggleGroup/README.md) | Group of toggles (single or multiple selection) |
| [Toolbar](src/components/Toolbar/README.md) | Accessible toolbar with roving-focus keyboard navigation |

### Display

| Component | Description |
|---|---|
| [Alert](src/components/Alert/README.md) | Status message with title and description |
| [Avatar](src/components/Avatar/README.md) | Profile image with text fallback |

### Utilities & Composition

| Component | Description |
|---|---|
| [DirectionProvider](src/components/DirectionProvider/README.md) | Declares writing direction (`ltr` / `rtl`) for all child Radix primitives |
| [Portal](src/components/Portal/README.md) | Renders children into a different part of the DOM tree |
| [Slot](src/components/Slot/README.md) | Composition primitive for implementing an `asChild` prop |
| [VisuallyHidden](src/components/VisuallyHidden/README.md) | Hides content visually while keeping it available to screen readers |
