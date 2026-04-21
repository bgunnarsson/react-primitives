# InputOTP

A one-time-password / verification-code input with individual slot rendering, auto-focus, and paste support. Wraps [`input-otp`](https://input-otp.rodz.dev).

## Import

```tsx
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_CHARS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from '@bgunnarsson/react-primitives'
```

## Parts

| Part | Description |
|---|---|
| `InputOTP` | Root — renders a hidden input and provides context to slots. |
| `InputOTPGroup` | Visual grouping wrapper. |
| `InputOTPSlot` | One character slot. Takes an `index` prop. |
| `InputOTPSeparator` | Visual separator between slot groups. |

## Usage

```tsx
const [value, setValue] = useState('')

<InputOTP maxLength={6} value={value} onChange={setValue} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSeparator />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

## Notes

- `pattern` is a regex string constraining allowed characters (`REGEXP_ONLY_DIGITS` for numeric codes, `REGEXP_ONLY_CHARS` for alpha, etc.).
- The active slot exposes a `data-active` attribute — style `[data-active] { ... }` to show focus.
- Pasting a full code auto-distributes characters across slots.
