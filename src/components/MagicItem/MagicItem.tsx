import React from "react"
import { startCase } from "lodash"

import { useLink } from "../Link/Link"

import { Container, Title, Info, Source } from "./MagicItem.styled"

export interface MagicItemProps extends React.ComponentProps<typeof Container> {
  title: string
  type: string
  rarity: string
  attunement?: boolean | string
  sourceTitle?: string
  sourceLink?: string
  children: React.ReactNode
}

export default function MagicItem({
  title,
  type,
  rarity,
  attunement,
  sourceTitle,
  sourceLink,
  children,
  ...props
}: MagicItemProps): JSX.Element {
  const ref = useLink(`Magic Item: ${title}`, title)

  return (
    <Container {...props} ref={ref}>
      <Title>{title}</Title>

      <Info>
        {startCase(type)}, {startCase(rarity)}
        {attunement &&
          (typeof attunement === "string"
            ? ` (requires attunement by ${attunement})`
            : " (requires attunement)")}
      </Info>

      <Source>
        {sourceTitle && (
          <>
            [source:{" "}
            {sourceLink ? (
              <a
                href={sourceLink}
                target="_blank"
                rel="external noopener noreferrer"
              >
                {sourceTitle}
              </a>
            ) : (
              sourceTitle
            )}
            ]
          </>
        )}
      </Source>

      {children}
    </Container>
  )
}
