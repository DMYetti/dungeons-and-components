import React from "react"

import { Container, Image as BaseImage } from "./Image.styled"

/**
 * Use `Image` to provide an image.
 */
export default function Image({
  src,
  alt,
  children,
  ...props
}: {
  src: string
  alt: string
  children: React.ReactNode
} & React.ComponentProps<typeof Container>): JSX.Element {
  return (
    <Container {...props}>
      <BaseImage src={src} alt={alt} />
      {children}
    </Container>
  )
}
