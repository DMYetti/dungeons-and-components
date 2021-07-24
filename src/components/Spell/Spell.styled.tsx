import styled from "@emotion/styled"

export const Container = styled.div`
  margin: 0 0 0.125in;
`

export const Title = styled.h3`
  font-size: 0.2in;
  line-height: 1;

  margin: 0;
  font-family: MrJeeves;
  font-weight: 800;
  color: #58180d;
`

export const Details = styled.div`
  font-style: italic;
`

export const Source = styled.p`
  font-style: italic;

  ${Details} + & {
    margin-top: -0.5em !important;
  }
`

export const InfoList = styled.ul`
  list-style: none;
  margin: 0 0 0.125in;
  padding: 0;
`

export const Info = styled.li``

export const InfoLabel = styled.span`
  font-weight: bold;

  :after {
    content: ": ";
  }
`

export const InfoValue = styled.span``

export const Description = styled.div``

export const Note = styled.div``
