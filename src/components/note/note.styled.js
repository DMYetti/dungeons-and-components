import styled from '@emotion/styled';

import border from './assets/border.png';

export const Container = styled.div`
  font-family: ScalySans;
  box-sizing: border-box;
  margin: 2em 0;
  padding: 5px 10px;
  background-color: #e0e5c1;
  border-style: solid;
  border-width: 11px;
  border-image: url(${border}) 11;
  border-image-outset: 9px 0px;
  box-shadow: 1px 4px 14px #888;

  column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;

  p, ul {
    font-size: 0.352cm;
  }
`;

export const Title = styled.h5`
  margin-top: 0;
  margin-bottom: 0.2em;
  font-family: ScalySansSmallCaps;
  font-size: 0.423cm;
  font-weight: 900;
`;
