# Breadcrumbs

Navigation trail showing the user's current location in the page hierarchy.

## Import

```tsx
import {
  Breadcrumbs,
  BreadcrumbsList,
  BreadcrumbsItem,
  BreadcrumbsLink,
  BreadcrumbsPage,
  BreadcrumbsSeparator,
} from '@bgunnarsson/react-primitives'
```

## Props

### `Breadcrumbs`

Extends `React.HTMLAttributes<HTMLElement>`. Renders `<nav aria-label="breadcrumb">`.

### `BreadcrumbsList`

Extends `React.HTMLAttributes<HTMLUListElement>`. Renders `<ul>`.

### `BreadcrumbsItem`

Extends `React.HTMLAttributes<HTMLLIElement>`. Renders `<li>`.

### `BreadcrumbsLink`

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link target. |

Extends `React.AnchorHTMLAttributes<HTMLAnchorElement>`.

### `BreadcrumbsPage`

Extends `React.HTMLAttributes<HTMLSpanElement>`. Renders `<span aria-current="page">` for the current page.

### `BreadcrumbsSeparator`

| Prop | Type | Default | Description |
|---|---|---|---|
| `separator` | `React.ReactNode` | `'•'` | Optional separator content. Accepts a string or any React node (e.g. an icon component). |
| `children` | `React.ReactNode` | — | Takes precedence over `separator` when provided. |

Extends `React.HTMLAttributes<HTMLSpanElement>`. Renders `<span aria-hidden="true">`.

## Usage

```tsx
<Breadcrumbs>
  <BreadcrumbsList>
    <BreadcrumbsItem>
      <BreadcrumbsLink href="/">Home</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsSeparator />
    <BreadcrumbsItem>
      <BreadcrumbsLink href="/products">Products</BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsSeparator />
    <BreadcrumbsItem>
      <BreadcrumbsPage>Item</BreadcrumbsPage>
    </BreadcrumbsItem>
  </BreadcrumbsList>
</Breadcrumbs>
```


## Tailwind Example

```tsx
<Breadcrumbs className="text-sm">
  <BreadcrumbsList className="flex items-center gap-2 list-none p-0 m-0">
    <BreadcrumbsItem>
      <BreadcrumbsLink href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
        Home
      </BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsSeparator className="text-gray-400" />
    <BreadcrumbsItem>
      <BreadcrumbsLink href="/products" className="text-gray-500 hover:text-gray-900 transition-colors">
        Products
      </BreadcrumbsLink>
    </BreadcrumbsItem>
    <BreadcrumbsSeparator className="text-gray-400" />
    <BreadcrumbsItem>
      <BreadcrumbsPage className="font-medium text-gray-900">
        Wireless Headphones
      </BreadcrumbsPage>
    </BreadcrumbsItem>
  </BreadcrumbsList>
</Breadcrumbs>
```

## Notes

- `BreadcrumbsSeparator` is `aria-hidden="true"` so screen readers skip it.
- `BreadcrumbsPage` adds `aria-current="page"` — do not set it manually.
- Override the default `•` via either `separator` or `children`: `<BreadcrumbsSeparator separator="/" />`, `<BreadcrumbsSeparator separator={<ChevronRight />} />`, or `<BreadcrumbsSeparator>/</BreadcrumbsSeparator>`.
