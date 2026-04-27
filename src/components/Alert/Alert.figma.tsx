import { figma } from '@figma/code-connect'
import { Alert, AlertIcon, AlertTitle, AlertDescription, AlertActions } from './Alert'

figma.connect(Alert, 'FIGMA_COMPONENT_URL', {
  props: {
    icon: figma.string('Icon'),
    title: figma.string('Title'),
    description: figma.string('Description'),
    actionLabel: figma.string('Action Label'),
  },
  example: ({ icon, title, description, actionLabel }) => (
    <Alert>
      <AlertIcon>{icon}</AlertIcon>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
      <AlertActions>
        <button type="button">{actionLabel}</button>
      </AlertActions>
    </Alert>
  ),
})
