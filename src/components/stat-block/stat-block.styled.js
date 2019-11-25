import styled from '@emotion/styled';
import { css } from '@emotion/core';

import border from './assets/border.png';
import rule from './assets/rule.png';

export const Container = styled.div`
  position: relative;
  padding-top: 15px;
  background-color: #FDF1DC;
  border-style: solid;
  border-width: 10px;
  border-image: url(${border}) 10;

  column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
  overflow: hidden;

  font-family: ScalySans;
  margin-bottom: 1em;
  padding: 5px 10px;
  box-shadow: 1px 4px 14px #888;

  ${({ wide }) => wide && css`
    column-span: all;
  `}
`;

export const HorizontalRule = styled.hr`
  visibility: visible;
  height: 6px;
  margin: 4px 0px;
  background-image: url(${rule});
  background-size: 100% 100%;
  border: none;
`;

export const Title = styled.h2`
  margin-top: -8px;
  margin-bottom: 0px;
`;

export const Heading = styled.h3`
  font-family: ScalySans;
  font-weight: 400;
  border-bottom: 1px solid #58180D;
`;

export const Summary = styled.p`
  padding-bottom: 0px;
`;

export const InfoList = styled.ul`
  list-style: none;
  margin: 0.5em 0;
  padding: 0 !important;
  font-family: ScalySans;
  font-size: 0.352cm;
  color: #58180D;
`;

export const InfoItem = styled.li`
`;

export const InfoLabel = styled.strong`
`;

export const Abilities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Ability = styled.div`
  width: 3em;
  text-align: center;
`;

export const AbilityLabel = styled.div`
  font-weight: bold;
`;

export const AbilityValue = styled.div`
`;

export const AbilityModifier = styled.div`
`;

export const Note = styled.p`
  text-indent: 0 !important;
  > * {
    margin-right: 0.5em;
  }
`;

export const NoteLabel = styled.strong`
  font-family: ScalySans;
  font-style: italic;
  font-weight: bold;
`;

export const NoteType = styled.em`
  font-family: ScalySans;
  font-style: italic;
`;
