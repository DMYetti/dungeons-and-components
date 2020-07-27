import React from 'react'
import { withContainer } from '~/utils-stories'

import Page, { PageTitle } from './page'

export default {
  title: 'Components|Page',
  component: Page,
  decorators: [ withContainer ],
}

export function Basic() {
  return (
    <Page footnote="Footnote">
      <PageTitle>Page Title</PageTitle>
      <p>Do the thing!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Page>
  )
}
