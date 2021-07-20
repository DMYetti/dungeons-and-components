import React from "react"

import {
  Container,
  Image,
  Content,
  Title,
  Subtitle,
  Author,
} from "./Cover.styled"

export interface CoverProps
  extends Omit<React.ComponentProps<typeof Container>, "children"> {
  title?: string
  subtitle?: string
  author?: string
  image?: React.ComponentProps<typeof Image>
  backgroundImage?: string
  children?: React.ReactNode
}

/**
 * Use `Cover` to provide a cover page.
 */
export default function Cover({
  title,
  subtitle,
  author,
  image,
  backgroundImage,
  children,
  ...props
}: CoverProps): JSX.Element {
  return (
    <Container {...props} backgroundImage={backgroundImage}>
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
