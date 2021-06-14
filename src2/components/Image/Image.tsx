import React from "react"

import { Container, Image as BaseImage } from "./Image.styled"

export interface ImageProps extends React.ComponentProps<typeof Container> {
  src: string
  alt: string
  children?: React.ReactNode
}

/**
 * Use `Image` to provide an image.
 */
export default function Image({
  src,
  alt,
  children,
  ...props
}: ImageProps): JSX.Element {
  return (
    <Container {...props}>
      <BaseImage src={src} alt={alt} />
      {children}
    </Container>
  )
}
