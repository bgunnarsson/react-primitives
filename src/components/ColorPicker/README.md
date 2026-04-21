# ColorPicker

Accessible color pickers for hex, RGBA, and HSLA values, plus a paired hex-input for typed entry. Wraps [`react-colorful`](https://omgovich.github.io/react-colorful/).

## Import

```tsx
import {
  ColorPicker,            // hex
  ColorPickerWithAlpha,   // hex + alpha
  ColorPickerRgba,        // RGBA object
  ColorPickerHsla,        // HSLA object
  ColorPickerInput,       // text input for hex values
} from '@bgunnarsson/react-primitives'
```

## Usage

### Hex

```tsx
const [color, setColor] = useState('#3b82f6')

<ColorPicker color={color} onChange={setColor} />
<ColorPickerInput color={color} onChange={setColor} prefixed />
```

### RGBA

```tsx
const [color, setColor] = useState({ r: 59, g: 130, b: 246, a: 1 })

<ColorPickerRgba color={color} onChange={setColor} />
```

## Notes

- Each variant is controlled: pass `color` and `onChange`.
- `ColorPickerInput` validates and sanitizes hex input. Pass `prefixed` to display and require the leading `#`.
- The picker swatch surfaces are drawn with CSS gradients — no images, no canvas.
