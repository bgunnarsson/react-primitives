import { figma } from '@figma/code-connect'
import {
  Timeline,
  TimelineItem,
  TimelineIndicator,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from './Timeline'

figma.connect(Timeline, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
  },
  example: ({ title, description }) => (
    <Timeline>
      <TimelineItem>
        <TimelineIndicator />
        <TimelineConnector />
        <TimelineContent>
          <TimelineTitle>{title}</TimelineTitle>
          <TimelineDescription>{description}</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
})
