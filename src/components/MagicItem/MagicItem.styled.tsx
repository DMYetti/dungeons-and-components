import styled from "@emotion/styled"

export const Container = styled.div`
  > :last-child {
    margin-bottom: 0;
  }
`

export const Title = styled.h2`
  font-size: 0.25in;
  line-height: 1;

  margin: 0.125in 0 0.0625in;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;
`

export const Info = styled.p`
  margin-top: 0 !important;
  font-style: italic;
`

export const Source = styled.p`
  margin-top: 0 !important;
  font-style: italic;

  ${Info} + & {
    margin-top: -0.75em !important;
  }
`
