import { create } from "@storybook/theming"

import brandImage from "./logo.png"

export default create({
  base: "dark",
  brandTitle: "DM Yetti",
  brandUrl: "https://www.dmyetti.com/",
  brandImage,

  colorPrimary: "#426dbf",
  colorSecondary: "#426dbf",

  appBg: "#132a38",
  appContentBg: "#173344",
  barBg: "#173344",
  inputBg: '#1d4156',

  appBorderRadius: 0,
  inputBorderRadius: 0,
})
