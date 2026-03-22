# Pagination

A compound component for page navigation.

## Import

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Pagination`
Extends `React.HTMLAttributes<HTMLElement>`. Renders `<nav aria-label="pagination">`.

### `PaginationContent`
Extends `React.HTMLAttributes<HTMLUListElement>`. Renders `<ul>`.

### `PaginationItem`
Extends `React.HTMLAttributes<HTMLLIElement>`. Renders `<li>`.

### `PaginationLink`

| Prop | Type | Default | Description |
|---|---|---|---|
| `isActive` | `boolean` | `false` | Marks the current page. Sets `aria-current="page"` and `data-active`. |

Extends `React.AnchorHTMLAttributes<HTMLAnchorElement>`.

### `PaginationPrevious` / `PaginationNext`
Extend `React.AnchorHTMLAttributes<HTMLAnchorElement>`. Include `aria-label` automatically.

### `PaginationEllipsis`
Extends `React.HTMLAttributes<HTMLSpanElement>`. Renders `…` by default (`aria-hidden="true"`).

## Usage

```tsx
<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="/page/2">Prev</PaginationPrevious>
    </PaginationItem>
    <PaginationItem><PaginationLink href="/page/1">1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="/page/2">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="/page/3" isActive>3</PaginationLink></PaginationItem>
    <PaginationItem><PaginationEllipsis /></PaginationItem>
    <PaginationItem><PaginationLink href="/page/10">10</PaginationLink></PaginationItem>
    <PaginationItem>
      <PaginationNext href="/page/4">Next</PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```

## Tailwind Example

```tsx
<Pagination>
  <PaginationContent className="flex items-center gap-1 list-none p-0 m-0">
    <PaginationItem>
      <PaginationPrevious href="#" className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">
        ← Prev
      </PaginationPrevious>
    </PaginationItem>
    {[1, 2, 3].map((p) => (
      <PaginationItem key={p}>
        <PaginationLink
          href="#"
          isActive={p === 2}
          className="rounded-md px-3 py-1.5 text-sm data-[active]:bg-blue-600 data-[active]:text-white hover:bg-gray-100"
        >
          {p}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationEllipsis className="px-2 text-gray-400" />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" className="flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100">
        Next →
      </PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>
```
