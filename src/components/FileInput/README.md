# FileInput

A file input with a styled trigger button and drag-and-drop support.

## Import

```tsx
import { FileInput } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `onFilesChange` | `(files: File[]) => void` | — | Called with selected files after picking or dropping. |
| `accept` | `string` | — | Accepted file types (e.g. `'image/*'`, `'.pdf,.docx'`). |
| `multiple` | `boolean` | `false` | Allow selecting multiple files. |
| `disabled` | `boolean` | `false` | Disables picking and dropping. |
| `children` | `React.ReactNode` | `'Choose file'` | Label rendered inside the trigger button. |

Also accepts `React.HTMLAttributes<HTMLDivElement>` on the outer container.

## Usage

```tsx
import { useState } from 'react'

const [files, setFiles] = useState<File[]>([])

<FileInput multiple accept="image/*" onFilesChange={setFiles}>
  Upload images
</FileInput>
```

## Tailwind Example

```tsx
<FileInput
  multiple
  accept="image/*"
  onFilesChange={setFiles}
  className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 text-center transition-colors data-[dragging]:border-blue-500 data-[dragging]:bg-blue-50"
>
  <span className="text-sm text-gray-500">
    Drag & drop images here, or{' '}
    <span className="font-medium text-blue-600 underline">browse</span>
  </span>
</FileInput>
```

## Notes

- The actual `<input type="file">` is hidden; clicking anywhere in the container (via the internal button) opens the file picker.
- `data-dragging` is set on the container while a file is dragged over it — use this for drag-hover styles.
- `data-disabled` is set when `disabled={true}`.
