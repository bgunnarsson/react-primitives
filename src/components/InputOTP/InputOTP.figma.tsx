import { figma } from '@figma/code-connect'
import { InputOTP, InputOTPGroup, InputOTPSlot } from './InputOTP'

figma.connect(InputOTP, 'FIGMA_COMPONENT_URL', {
  props: {
    maxLength: figma.string('Length'),
  },
  example: ({ maxLength }) => (
    <InputOTP maxLength={Number(maxLength) || 6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
    </InputOTP>
  ),
})
