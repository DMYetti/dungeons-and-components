import React from "react"

import { getOrdinal } from "../../helpers/numbers"

import {
  Container,
  Title,
  Details,
  InfoList,
  Info,
  InfoLabel,
  InfoValue,
  Description,
  Note,
} from "./Spell.styled"

export default function Spell({
  title,
  level,
  school,
  time,
  range,
  duration,
  components,
  children,
  ...props
}: {
  title: string
  level: number
  school: string
  time: string | [number, string]
  range: string | [number, string]
  duration: string | [number, string]
  concentration?: boolean
  ritual?: boolean
  components: {
    verbal?: boolean
    somatic?: boolean
    material?: string
  }
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      <Title>{title}</Title>

      {level && (
        <Details>
          {getOrdinal(level)}-level {school}
        </Details>
      )}

      <InfoList>
        {time && (
          <Info>
            <InfoLabel>Casting Time</InfoLabel>
            <InfoValue>{Array.isArray(time) ? time.join(" ") : time}</InfoValue>
          </Info>
        )}

        {range && (
          <Info>
            <InfoLabel>Range</InfoLabel>
            <InfoValue>
              {Array.isArray(range) ? range.join(" ") : range}
            </InfoValue>
          </Info>
        )}

        {components && (
          <Info>
            <InfoLabel>Components</InfoLabel>
            <InfoValue>
              {[
                components.verbal && "V",
                components.somatic && "S",
                components.material && "M *",
              ]
                .filter((v) => v)
                .join(", ")}
            </InfoValue>
          </Info>
        )}

        {duration && (
          <Info>
            <InfoLabel>Duration</InfoLabel>
            <InfoValue>
              {Array.isArray(duration) ? duration.join(" ") : duration}
            </InfoValue>
          </Info>
        )}
      </InfoList>

      <Description>{children}</Description>

      {components.material && <Note>{components.material}</Note>}
    </Container>
  )
}
