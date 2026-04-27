import { figma } from '@figma/code-connect'
import { Stepper, StepperItem, StepperIndicator, StepperTitle } from './Stepper'

figma.connect(Stepper, 'FIGMA_COMPONENT_URL', {
  props: {
    activeStep: figma.string('Active Step'),
    title: figma.string('Title'),
  },
  example: ({ activeStep, title }) => (
    <Stepper value={Number(activeStep) || 1}>
      <StepperItem step={1}>
        <StepperIndicator />
        <StepperTitle>{title}</StepperTitle>
      </StepperItem>
    </Stepper>
  ),
})
