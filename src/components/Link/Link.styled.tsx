import styled from "@emotion/styled"

export const Container = styled.div<{
  link?: boolean
}>`
  cursor: ${({ link }) => (link ? "pointer" : "default")};
`
