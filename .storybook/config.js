import { addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'

addParameters({
  options: {
    theme: themes.dark,
    storySort: (a, b) => a[1].id.localeCompare(b[1].id),
    panelPosition: 'right',
  },
})

configure(require.context('../src', true, /\.stories\.js$/), module)
