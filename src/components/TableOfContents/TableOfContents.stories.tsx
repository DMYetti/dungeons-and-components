import type { Story, Meta } from "@storybook/react"

import React from "react"
import { withHalfPage, argTypes } from "../../helpers/stories"

import TableOfContents, { TableOfContentsProps } from "./TableOfContents"

export default {
  title: "Components/TableOfContents",
  component: TableOfContents,
  decorators: [withHalfPage],
  argTypes,
} as Meta

export const Basic: Story<TableOfContentsProps> = (args) => (
  <TableOfContents
    {...args}
    items={[
      "Introduction",
      [
        "Synopsis",
        "Using This Adventure",
        "About This Adventure",
        ["Adventure Background", "Adventure Hooks", "Adventure Overview"],
      ],
      "Epilogue",
      ["They Succeed", "They... Don't"],
      "Afterword",
      ["Acknowledgments", "Author Bio", "Art Credits"],
      "Appendices",
      [
        "Appendix A: Magic Items",
        "Appendix B: Monsters",
        "Appendix C: NPCs",
        "Appendix D: Handouts",
      ],
    ]}
  />
)
