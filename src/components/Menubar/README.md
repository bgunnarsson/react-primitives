# Menubar

A desktop-style application menu bar with multiple top-level menus. Arrow-key navigation moves between menus. Wraps `@radix-ui/react-menubar`.

## Import

```tsx
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from '@bgunnarsson/react-primitives'
```

## Usage

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem onSelect={onNew}>New</MenubarItem>
      <MenubarItem onSelect={onOpen}>Open</MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
        <MenubarSubTrigger>Export</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>PDF</MenubarItem>
          <MenubarItem>PNG</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

## Notes

- Unlike `DropdownMenu`, a `Menubar` owns multiple menus and moves focus between them with Left/Right arrows.
- Use `CheckboxItem` / `RadioGroup` + `RadioItem` for stateful menu entries (e.g. "Show sidebar" toggle).
- Wrap `MenubarContent` in `MenubarPortal` to render into `document.body`, which avoids clipping inside overflow containers.
