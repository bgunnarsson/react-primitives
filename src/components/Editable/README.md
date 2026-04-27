# Editable

Click-to-edit inline text. Renders a preview by default, swaps in an input/textarea while editing, and commits on blur or `Enter`.

## Import

```tsx
import { Editable, EditablePreview, EditableInput, EditableTextarea, EditableControls } from '@bgunnarsson/react-primitives'
```

## Props

### `Editable`

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | — | Controlled committed value. |
| `defaultValue` | `string` | `''` | Initial committed value. |
| `onValueChange` | `(value: string) => void` | — | Fires whenever the committed value changes. |
| `onSubmit` | `(value: string) => void` | — | Fires when an edit is committed. |
| `onCancel` | `() => void` | — | Fires when editing is cancelled. |
| `editing` | `boolean` | — | Controlled editing state. |
| `defaultEditing` | `boolean` | `false` | Initial editing state. |
| `onEditingChange` | `(editing: boolean) => void` | — | |
| `disabled` | `boolean` | `false` | Disables entering edit mode. |
| `placeholder` | `string` | — | Shown in preview when value is empty and on the input. |
| `selectAllOnEdit` | `boolean` | `true` | Select the field's contents when edit mode starts. |
| `submitOnBlur` | `boolean` | `true` | Commit when the field loses focus. Otherwise cancel. |
| `submitOnEnter` | `boolean` | `true` | Commit on Enter. |
| `cancelOnEscape` | `boolean` | `true` | Cancel on Escape. |

### `EditablePreview`

Renders the committed value as a clickable `<span role="button">`. Renders nothing while editing. Children, if provided, override the rendered text.

Data attributes:
- `data-empty` — value is empty.
- `data-placeholder` — value is empty and a placeholder is set.

### `EditableInput` / `EditableTextarea`

Mounted while editing. Bound to the internal draft. Pass any native `<input>` / `<textarea>` props except `value` / `defaultValue` / `onChange`.

### `EditableControls`

Render-prop helper that exposes `{ editing, startEdit, submit, cancel }`. Use `onMouseDown={(e) => e.preventDefault()}` on save/cancel buttons so they don't blur the field before clicking.

## Usage

```tsx
<Editable defaultValue="My document" onSubmit={save}>
  <EditablePreview />
  <EditableInput />
</Editable>
```

## Notes

- Use `EditableTextarea` with `submitOnEnter={false}` for multi-line content so Enter inserts a newline.
- Both Preview and Input are rendered into the same parent — only one is mounted at a time.
