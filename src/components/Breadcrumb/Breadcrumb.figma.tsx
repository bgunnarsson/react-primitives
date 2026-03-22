import React from 'react'
import { figma } from '@figma/code-connect'
import { Breadcrumbs, BreadcrumbsList, BreadcrumbsItem, BreadcrumbsLink, BreadcrumbsPage } from './Breadcrumb'

figma.connect(Breadcrumbs, 'FIGMA_COMPONENT_URL', {
  props: {},
  example: () => (
    <Breadcrumbs>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Home</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsPage>Current</BreadcrumbsPage>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>
  ),
})
