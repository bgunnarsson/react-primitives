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
| [AspectRatio](src/components/AspectRatio/AspectRatio.md) | Container that locks children to a fixed width/height ratio |
| [Card](src/components/Card/Card.md) | Flexible container for composing any card layout |
| [CodeBlock](src/components/CodeBlock/CodeBlock.md) | Code display with title, copy button, and optional syntax highlighting |
| [Container](src/components/Container/Container.md) | Generic div wrapper accepting all HTML attributes |
| [EmptyState](src/components/EmptyState/EmptyState.md) | Zero-data placeholder with icon, title, description, and action |
| [Footer](src/components/Footer/Footer.md) | Semantic `<footer>` wrapper |
| [Grid](src/components/Grid/Grid.md) | CSS grid container and item wrapper |
| [Header](src/components/Header/Header.md) | Semantic `<header>` wrapper |
| [Resizable](src/components/Resizable/Resizable.md) | Resizable split-pane layouts (IDE sidebars, chat UIs) |
| [ScrollArea](src/components/ScrollArea/ScrollArea.md) | Scrollable container with custom scrollbars |
| [Separator](src/components/Separator/Separator.md) | Horizontal or vertical dividing line |
| [Skeleton](src/components/Skeleton/Skeleton.md) | Loading placeholder element |
| [Stat](src/components/Stat/Stat.md) | Metric display with label, value, and help text |
| [Table](src/components/Table/Table.md) | Semantic table with Header, Body, Footer, Row, Head, Cell, Caption |
| [Text](src/components/Text/Text.md) | Polymorphic text element (`p`, `span`, `h1`–`h6`) |

### Typography & Media

| Component | Description |
|---|---|
| [Badge](src/components/Badge/Badge.md) | Inline label for status, counts, or categories |
| [Icon](src/components/Icon/Icon.md) | SVG icon from sprite or external file |
| [Kbd](src/components/Kbd/Kbd.md) | Semantic `<kbd>` wrapper for keyboard shortcut hints |
| [Lightbox](src/components/Lightbox/Lightbox.md) | Full-screen image viewer with navigation |
| [Picture](src/components/Picture/Picture.md) | Responsive `<picture>` with multiple sources |
| [Richtext](src/components/Richtext/Richtext.md) | CMS HTML string renderer |
| [Spinner](src/components/Spinner/Spinner.md) | Animated loading indicator |
| [VideoPlayer](src/components/VideoPlayer/VideoPlayer.md) | HTML5 video wrapper |

### Form

| Component | Description |
|---|---|
| [Button](src/components/Button/Button.md) | Unstyled button element |
| [Calendar](src/components/Calendar/Calendar.md) | Inline calendar for single, range, or multiple date selection |
| [Checkbox](src/components/Checkbox/Checkbox.md) | Accessible checkbox with built-in indicator |
| [CheckboxGroup](src/components/CheckboxGroup/CheckboxGroup.md) | Controlled group of labelled checkboxes |
| [ColorPicker](src/components/ColorPicker/ColorPicker.md) | Hex, RGBA, and HSLA color pickers |
| [Combobox](src/components/Combobox/Combobox.md) | Searchable dropdown select |
| [DatePicker](src/components/DatePicker/DatePicker.md) | Single date picker with calendar popover |
| [FileInput](src/components/FileInput/FileInput.md) | File picker with drag-and-drop support |
| [Form](src/components/Form/Form.md) | Context-based field wrapper (label, control, error message) |
| [Input](src/components/Input/Input.md) | Text input field |
| [InputOTP](src/components/InputOTP/InputOTP.md) | One-time-password / verification-code input |
| [Label](src/components/Label/Label.md) | Form field label |
| [NumberInput](src/components/NumberInput/NumberInput.md) | Numeric input with increment/decrement buttons |
| [RadioGroup](src/components/RadioGroup/RadioGroup.md) | Radio button group |
| [Rating](src/components/Rating/Rating.md) | Star / score rating input with keyboard and screen-reader support |
| [Select](src/components/Select/Select.md) | Dropdown select with groups and separators |
| [Slider](src/components/Slider/Slider.md) | Accessible range slider |
| [Switch](src/components/Switch/Switch.md) | Toggle switch |
| [TagInput](src/components/TagInput/TagInput.md) | Multi-value chip/token input |
| [Textarea](src/components/Textarea/Textarea.md) | Multi-line text input |
| [TimePicker](src/components/TimePicker/TimePicker.md) | Time input with keyboard stepping and 12/24h formats |

### Navigation

| Component | Description |
|---|---|
| [Breadcrumbs](src/components/Breadcrumb/Breadcrumb.md) | Navigation trail with current page indicator |
| [Link](src/components/Link/Link.md) | Anchor element |
| [Menubar](src/components/Menubar/Menubar.md) | Desktop-style application menu bar |
| [Nav](src/components/Nav/Nav.md) | Semantic `<nav>`, `<ul>`, `<li>` wrappers |
| [NavigationMenu](src/components/NavigationMenu/NavigationMenu.md) | Site-header navigation with mega-menu support |
| [Pagination](src/components/Pagination/Pagination.md) | Page navigation with prev, next, and ellipsis |
| [Stepper](src/components/Stepper/Stepper.md) | Multi-step progress indicator |
| [Tabs](src/components/Tabs/Tabs.md) | Tabbed panel interface |
| [TreeView](src/components/TreeView/TreeView.md) | Hierarchical tree with expand/collapse and selection |

### Overlay & Popover

| Component | Description |
|---|---|
| [AlertDialog](src/components/AlertDialog/AlertDialog.md) | Confirmation dialog for destructive actions |
| [Command](src/components/Command/Command.md) | Command palette (⌘K) — inline or as a modal |
| [ContextMenu](src/components/ContextMenu/ContextMenu.md) | Right-click menu |
| [Dialog](src/components/Dialog/Dialog.md) | Modal dialog |
| [Drawer](src/components/Drawer/Drawer.md) | Bottom sheet with drag-to-dismiss |
| [DropdownMenu](src/components/DropdownMenu/DropdownMenu.md) | Button-triggered dropdown menu |
| [HoverCard](src/components/HoverCard/HoverCard.md) | Hover-triggered preview popover |
| [Popover](src/components/Popover/Popover.md) | Click-triggered floating panel |
| [Sheet](src/components/Sheet/Sheet.md) | Sliding panel from any screen edge |
| [Toaster](src/components/Toast/Toast.md) | Toast notification system |
| [Tooltip](src/components/Tooltip/Tooltip.md) | Hover/focus tooltip |

### Disclosure & Interaction

| Component | Description |
|---|---|
| [Accordion](src/components/Accordion/Accordion.md) | Expandable sections (single or multiple) |
| [Carousel](src/components/Carousel/Carousel.md) | Touch-friendly slideshow |
| [Collapsible](src/components/Collapsible/Collapsible.md) | Single expandable section |
| [Progress](src/components/Progress/Progress.md) | Progress bar (0–100) |
| [Toggle](src/components/Toggle/Toggle.md) | Pressed/unpressed button |
| [ToggleGroup](src/components/ToggleGroup/ToggleGroup.md) | Group of toggles (single or multiple selection) |
| [Toolbar](src/components/Toolbar/Toolbar.md) | Accessible toolbar with roving-focus keyboard navigation |

### Display

| Component | Description |
|---|---|
| [Alert](src/components/Alert/Alert.md) | Status message with title and description |
| [Avatar](src/components/Avatar/Avatar.md) | Profile image with text fallback |

### Utilities & Composition

| Component | Description |
|---|---|
| [DirectionProvider](src/components/DirectionProvider/DirectionProvider.md) | Declares writing direction (`ltr` / `rtl`) for all child Radix primitives |
| [Portal](src/components/Portal/Portal.md) | Renders children into a different part of the DOM tree |
| [Slot](src/components/Slot/Slot.md) | Composition primitive for implementing an `asChild` prop |
| [VisuallyHidden](src/components/VisuallyHidden/VisuallyHidden.md) | Hides content visually while keeping it available to screen readers |
