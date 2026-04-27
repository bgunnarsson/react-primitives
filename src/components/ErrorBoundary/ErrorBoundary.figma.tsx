import { figma } from '@figma/code-connect'
import { ErrorBoundary } from './ErrorBoundary'

figma.connect(ErrorBoundary, 'FIGMA_COMPONENT_URL', {
  example: () => (
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <div />
    </ErrorBoundary>
  ),
})
