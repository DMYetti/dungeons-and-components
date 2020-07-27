import styled from '@emotion/styled'
import { withBreakable, withWide } from '../../utils/styled'

import border from './assets/border.png'
import rule from './assets/rule.png'

export const Container = styled.div`
  ${withBreakable}
  ${withWide}

  font-family: ScalySans;
  margin: 0.125in 0;
  border-style: solid;
  border-width: 0.1875in 0.125in;
  border-image: url(${border}) 36 24 fill stretch;
  box-shadow: 0 0.0625in 0.125in #888;

  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-bottom: 0;
  }
`

export const HorizontalRule = styled.hr`
  visibility: visible;
  height: 0.0625in;
  margin: 0.0625in 0;
  background-image: url(${rule});
  background-size: 100% 100%;
  border: none;
`

export const Title = styled.h2`
  margin: 0.0625in 0 0;
`

export const Heading = styled.h3`
  font-family: ScalySans;
  font-weight: 400;
  margin: 0.0625in 0;
  border-bottom: 1px solid #58180D;
`

export const Summary = styled.div`
  margin: 0 0 0.0625in;
  span {
    margin-right: 0.25em;
  }
`

export const InfoList = styled.ul`
  list-style: none;
  margin: 0.0625in 0;
  padding: 0;
  font-family: ScalySans;
  color: #58180D;
`

export const InfoItem = styled.li`
  text-indent: -0.5em;
  padding-left: 0.5em;
`

export const InfoLabel = styled.strong`
  margin-right: 0.5em;
`

export const Abilities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const Ability = styled.div`
  width: 3.5em;
  text-align: center;
`

export const AbilityLabel = styled.div`
  font-weight: bold;
`

export const AbilityValue = styled.div`
`

export const Note = styled.div`
  margin: 0.0625in 0;

  > * {
    margin-right: 0.25em;
  }
`

export const NoteLabel = styled.strong`
  font-family: ScalySans;
  font-style: italic;
  font-weight: bold;
`

export const NoteType = styled.em`
  font-family: ScalySans;
  font-style: italic;
`
