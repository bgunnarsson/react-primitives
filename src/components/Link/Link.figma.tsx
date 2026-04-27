import React from 'react'
import { figma } from '@figma/code-connect'
import { Link } from './Link'

figma.connect(Link, 'FIGMA_COMPONENT_URL', {
  props: {
    children: figma.string('Label'),
    href: figma.string('URL'),
  },
  example: ({ children, href }) => <Link href={href}>{children}</Link>,
})
