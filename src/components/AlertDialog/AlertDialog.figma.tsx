import { figma } from '@figma/code-connect'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './AlertDialog'

figma.connect(AlertDialog, 'FIGMA_COMPONENT_URL', {
  props: {
    title: figma.string('Title'),
    description: figma.string('Description'),
    actionLabel: figma.string('Action Label'),
    cancelLabel: figma.string('Cancel Label'),
  },
  example: ({ title, description, actionLabel, cancelLabel }) => (
    <AlertDialog>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
        <AlertDialogAction>{actionLabel}</AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  ),
})
