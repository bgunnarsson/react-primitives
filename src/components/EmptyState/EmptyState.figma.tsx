import { figma } from '@figma/code-connect'
import { EmptyState, EmptyStateTitle, EmptyStateDescription } from './EmptyState'

figma.connect(EmptyState, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: ({ title, description }) => (
    <EmptyState>
      <EmptyStateTitle>{title}</EmptyStateTitle>
      <EmptyStateDescription>{description}</EmptyStateDescription>
    </EmptyState>
  ),
})
