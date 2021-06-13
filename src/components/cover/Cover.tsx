import React from "react"

import {
  Container,
  Image,
  Content,
  Title,
  Subtitle,
  Author,
} from "./Cover.styled"

/**
 * Use `Cover` to provide a cover page.
 */
export default function Cover({
  title,
  subtitle,
  author,
  image,
  children,
  ...props
}: {
  title?: string
  subtitle?: string
  author?: string
  image?: {
    src: string
    alt: string
  }
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      {image && <Image {...image} />}

      <Content>
        {title && <Title>{title}</Title>}

        {subtitle && (
          <Subtitle>
            {subtitle.split("\\n").map((line, index) => (
              <React.Fragment key={`${line}-${index}`}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </Subtitle>
        )}

        {author && <Author>Written by {author}</Author>}

        {children}
      </Content>
    </Container>
  )
}
