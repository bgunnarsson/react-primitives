import { figma } from '@figma/code-connect'
import { Status, StatusIndicator, StatusLabel } from './Status'

figma.connect(Status, 'FIGMA_COMPONENT_URL', {
  props: {
    value: figma.enum('Status', {
      online: 'online',
      offline: 'offline',
      busy: 'busy',
      away: 'away',
      idle: 'idle',
    }),
    label: figma.string('Label'),
  },
  example: ({ value, label }) => (
    <Status value={value}>
      <StatusIndicator />
      <StatusLabel>{label}</StatusLabel>
    </Status>
  ),
})
