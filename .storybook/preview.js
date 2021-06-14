import { themes } from "@storybook/theming"

export const parameters = {
  layout: "centered",
  option: {
    // storySort: a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    // storySort: (a, b) => {
    //   if (a[1].kind.endsWith('/README')) {
    //     return -1
    //   }
    //   if (b[1].kind.endsWith('/README')) {
    //     return 1
    //   }

    //   return a[1].id.localeCompare(b[1].id)
    // },
    storySort: {
      method: 'alphabetical',
      order: ['README'],
      locales: 'en-US',
    },
  },
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
