# Table

Semantic HTML table components with automatic horizontal scroll on the root element.

## Import

```tsx
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from '@bgunnarsson/react-primitives'
```

## Props

All parts extend their corresponding HTML element attributes and accept `className`. None have required props.

| Component | Element | Description |
|---|---|---|
| `Table` | `<table>` (inside `<div>` with `overflow-x: auto`) | Root table — automatically scrollable horizontally |
| `TableHeader` | `<thead>` | Table header section |
| `TableBody` | `<tbody>` | Table body section |
| `TableFooter` | `<tfoot>` | Table footer section |
| `TableRow` | `<tr>` | Table row |
| `TableHead` | `<th>` | Header cell |
| `TableCell` | `<td>` | Body/footer cell |
| `TableCaption` | `<caption>` | Table caption (accessibility description) |

## Usage

```tsx
<Table>
  <TableCaption>A list of recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>INV-001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Tailwind Example

```tsx
<Table className="w-full caption-bottom text-sm">
  <TableCaption className="mt-3 text-xs text-gray-400">
    Showing 3 of 24 invoices
  </TableCaption>
  <TableHeader>
    <TableRow className="border-b border-gray-200">
      <TableHead className="h-10 px-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
        Invoice
      </TableHead>
      <TableHead className="h-10 px-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
        Status
      </TableHead>
      <TableHead className="h-10 px-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
        Amount
      </TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[
      { id: 'INV-001', status: 'Paid', amount: '$250.00' },
      { id: 'INV-002', status: 'Pending', amount: '$125.00' },
      { id: 'INV-003', status: 'Overdue', amount: '$400.00' },
    ].map((row) => (
      <TableRow key={row.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
        <TableCell className="px-4 py-3 font-medium text-gray-900">{row.id}</TableCell>
        <TableCell className="px-4 py-3 text-gray-600">{row.status}</TableCell>
        <TableCell className="px-4 py-3 text-right text-gray-900">{row.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow className="border-t border-gray-200 bg-gray-50">
      <TableCell className="px-4 py-3 font-semibold text-gray-900" colSpan={2}>Total</TableCell>
      <TableCell className="px-4 py-3 text-right font-semibold text-gray-900">$775.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

## Notes

- `Table` wraps the `<table>` in a `<div style={{ overflowX: 'auto' }}>` automatically to handle wide tables on narrow screens.
- `TableCaption` is rendered below the table by default (CSS `caption-side: bottom`). Use `className="caption-top"` to move it above.
- For sortable or paginated tables, combine with state management in your app — the primitives only handle the markup.
