# TagInput

A multi-value text input for tags, chips, or tokens. Supports keyboard entry (Enter / comma to add, Backspace to remove the last), controlled and uncontrolled modes, custom tag rendering, and a max cap.

## Import

```tsx
import { TagInput } from '@bgunnarsson/react-primitives'
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string[]` | — | Controlled list of tags. |
| `defaultValue` | `string[]` | `[]` | Uncontrolled initial tags. |
| `onValueChange` | `(tags: string[]) => void` | — | Called when tags are added or removed. |
| `addOnKeys` | `string[]` | `['Enter', ',']` | Keys that commit the current draft as a tag. |
| `allowDuplicates` | `boolean` | `false` | Allow the same tag string twice. |
| `maxTags` | `number` | — | Maximum tag count. |
| `disabled` | `boolean` | `false` | Prevent interaction. |
| `placeholder` | `string` | — | Placeholder shown when there are no tags. |
| `inputClassName` / `inputStyle` | — | — | Styling for the inner `<input>`. |
| `renderTag` | `(tag, index, remove) => ReactNode` | — | Custom renderer for each tag. |

## Usage

```tsx
const [tags, setTags] = useState<string[]>([])

<TagInput
  value={tags}
  onValueChange={setTags}
  placeholder="Add tags…"
  renderTag={(tag, i, remove) => (
    <span className="tag">
      {tag}
      <button onClick={remove}>×</button>
    </span>
  )}
/>
```

## Keyboard

| Key | Behavior |
|---|---|
| `Enter`, `,` | Commit the current draft as a tag (configurable via `addOnKeys`). |
| `Backspace` on empty input | Remove the last tag. |
| `blur` | Commit the current draft if non-empty. |

## Notes

- Duplicates are rejected by default. Set `allowDuplicates` to keep them.
- When `renderTag` is omitted, tags render as simple spans with a `data-tag` attribute and a "×" remove button.
- Clicking anywhere on the container focuses the input, matching the behavior users expect from token inputs.
