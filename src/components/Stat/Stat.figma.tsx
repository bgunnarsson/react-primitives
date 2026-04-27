import { figma } from '@figma/code-connect'
import { Stat, StatLabel, StatValue, StatHelpText } from './Stat'

figma.connect(Stat, 'FIGMA_COMPONENT_URL', {
  props: {
    label: figma.string('Label'),
    value: figma.string('Value'),
    helpText: figma.string('Help Text'),
  },
  example: ({ label, value, helpText }) => (
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatValue>{value}</StatValue>
      <StatHelpText>{helpText}</StatHelpText>
    </Stat>
  ),
})
